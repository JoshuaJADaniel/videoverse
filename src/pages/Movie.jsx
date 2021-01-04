import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import tmdb from "../requests/tmdb";
import { getMovieDetailsPath } from "../requests/getTmdbEndpointPaths";
import { getMovieBackdropUrl } from "../requests/getTmdbEndpointUrls";
import extractMovieDetails from "../utils/extractMovieDetails";

import MainWrapper from "../components/main/MainWrapper";
import StaticHero from "../components/main/StaticHero";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

import Loading from "./Loading";

const Movie = () => {
  const { id } = useParams();
  const history = useHistory();
  const [theme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  useEffect(() => {
    tmdb
      .get(getMovieDetailsPath(id))
      .then((res) => {
        setMovieDetails(extractMovieDetails(res.data));
        setTimeout(() => setLoading(false), 500);
      })
      .catch(() => {
        setTimeout(() => history.push("/404"), 500);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header />
        <StaticHero data={movieDetails} />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Movie;
