import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import Loading from "pages/Loading";
import resolveLoading from "utils/resolveLoading";
import extractPersonDetails from "utils/extractPersonDetails";

import getMedia from "requests/getMedia";
import getPerson from "requests/getPerson";
import getMediaTrailer from "requests/getMediaTrailer";

import OverviewSection from "components/main/section/OverviewSection";
import MediaSection from "components/main/section/MediaSection";
import CastSection from "components/main/section/CastSection";
import CrewSection from "components/main/section/CrewSection";
import StaticHero from "components/main/hero/StaticHero";
import MainWrapper from "components/main/MainWrapper";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

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

  useEffect(() => {
    getMedia(
      `/movie/${movieId}`,
      (data) => {
        setMovieDetails(data);
        resolveLoading(setLoading);
      },
      [],
      history,
      null
    );

    getPerson(`/movie/${movieId}/credits`, ({ cast, crew }) => {
      if (cast) {
        setCastDetails(cast.map((person) => extractPersonDetails(person)));
      }

      if (crew) {
        setCrewDetails(crew.map((person) => extractPersonDetails(person)));
      }
    });

    getMedia(`/movie/${movieId}/recommendations`, setRelatedMovies);
    getMediaTrailer(`/movie/${movieId}/videos`, setTrailer);
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
