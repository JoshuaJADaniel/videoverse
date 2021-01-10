import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import tmdb from "requests/tmdb";
import extractMediaDetails from "utils/extractMediaDetails";
import extractPersonDetails from "utils/extractPersonDetails";
import extractTrailerEmbedUrl from "utils/extractTrailerEmbedUrl";
import {
  getMovieVideosPath,
  getMovieDetailsPath,
  getRelatedMoviesPath,
  getMovieCreditDetailsPath,
} from "requests/getTmdbEndpointPaths";

import MediaSection from "components/main/section/MediaSection";
import CastSection from "components/main/section/CastSection";
import CrewSection from "components/main/section/CrewSection";
import YoutubeVideo from "components/common/YoutubeVideo";
import StaticHero from "components/main/hero/StaticHero";
import MainWrapper from "components/main/MainWrapper";
import Section from "components/main/section/Section";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

import Loading from "pages/Loading";
import OverviewSection from "../components/main/section/OverviewSection";

const Movie = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const [dark, setDark] = useState(true);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const getTheme = () => (dark ? darkTheme : lightTheme);
  const loadingDelay = 500;
  const maxCastLength = 15;
  const maxCrewLength = 15;

  useEffect(() => {
    tmdb
      .get(getMovieDetailsPath(movieId))
      .then((res) => {
        setMovieDetails(extractMediaDetails(res.data));
        setTimeout(() => setLoading(false), loadingDelay);
      })
      .catch(() => setTimeout(() => history.push("/404"), loadingDelay));

    tmdb
      .get(getMovieCreditDetailsPath(movieId))
      .then((res) => {
        if (res.data.cast) {
          setCastDetails(
            res.data.cast
              .slice(0, maxCastLength)
              .map((person) => extractPersonDetails(person))
          );
        }

        if (res.data.crew) {
          setCrewDetails(
            res.data.crew
              .slice(0, maxCrewLength)
              .map((person) => extractPersonDetails(person))
          );
        }
      })
      .catch((err) => console.log(err));

    tmdb
      .get(getRelatedMoviesPath(movieId))
      .then((res) => {
        if (res.data.results) {
          setRelatedMovies(
            res.data.results.map((movie) => {
              let newMovie = extractMediaDetails(movie);
              newMovie.mediaType = "movie";
              return newMovie;
            })
          );
        }
      })
      .catch((err) => console.log(err));

    tmdb
      .get(getMovieVideosPath(movieId))
      .then((res) => {
        if (res.data.results) {
          setTrailer(extractTrailerEmbedUrl(res.data.results));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header mode={dark} setMode={setDark} />
        <StaticHero data={movieDetails} />
        <Separator verticalSpace={50} />
        <OverviewSection overview={movieDetails.overview} trailer={trailer} />
        <CastSection cast={castDetails} />
        <Separator verticalSpace={50} />
        <CrewSection crew={crewDetails} />
        <Separator verticalSpace={50} />
        <MediaSection title="Related Movies" mediaData={relatedMovies} />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Movie;
