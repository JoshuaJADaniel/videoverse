import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import tmdb from "requests/tmdb";
import extractMovieDetails from "utils/extractMovieDetails";
import {
  getRelatedMoviesPath,
  getMovieDetailsPath,
  getCastDetailsPath,
} from "requests/getTmdbEndpointPaths";

import MovieSection from "components/main/section/MovieSection";
import CastSection from "components/main/section/CastSection";
import CrewSection from "components/main/section/CrewSection";
import StaticHero from "components/main/hero/StaticHero";
import MainWrapper from "components/main/MainWrapper";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";
import Separator from "components/common/Separator";

import Loading from "pages/Loading";

const Movie = () => {
  const { id } = useParams();
  const history = useHistory();
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const getTheme = () => (dark ? darkTheme : lightTheme);

  useEffect(() => {
    tmdb
      .get(getMovieDetailsPath(id))
      .then((res) => {
        setMovieDetails(extractMovieDetails(res.data));
        setTimeout(() => setLoading(false), 500);
      })
      .catch(() => setTimeout(() => history.push("/404"), 500));

    tmdb
      .get(getCastDetailsPath(id))
      .then((res) => {
        if (res.data.cast) {
          setCastDetails(res.data.cast.slice(0, 15));
        }

        if (res.data.crew) {
          setCrewDetails(res.data.crew.slice(0, 15));
        }
      })
      .catch((err) => console.log(err));

    tmdb
      .get(getRelatedMoviesPath(id))
      .then((res) => {
        if (res.data.results) {
          setRelatedMovies(res.data.results);
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
        <Separator verticalSpace={40} />
        <CastSection cast={castDetails} />
        <Separator verticalSpace={70} />
        <CrewSection crew={crewDetails} />
        <Separator verticalSpace={70} />
        <MovieSection title="Related Movies" moviesBasic={relatedMovies} />
        <Separator verticalSpace={100} />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Movie;
