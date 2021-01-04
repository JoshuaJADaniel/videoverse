import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import tmdb from "../requests/tmdb";
import { getMovieDetailsPath } from "../requests/getTmdbEndpointPaths";
import { getMovieBackdropUrl } from "../requests/getTmdbEndpointUrls";

import LoadingScreen from "../components/common/LoadingScreen";
import MainWrapper from "../components/main/MainWrapper";
import StaticHero from "../components/main/StaticHero";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

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
        let updatedMovieDetails = {
          backdropPath: res.data.backdrop_path,
          title: res.data.title,
          overview: res.data.overview,
          year: res.data.release_date,
          genres: res.data.genres.map((item) => item.name),
          runtime: res.data.runtime,
          rating: res.data.vote_average,
          tagline: res.data.tagline,
          outOf: 10,
        };

        setMovieDetails(updatedMovieDetails);
        setTimeout(() => setLoading(false), 500);
      })
      .catch(() => {
        setTimeout(() => history.push("/404"), 500);
      });
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={getTheme}>
        <GlobalStyles />
        <Sidebar />
        <MainWrapper>
          <LoadingScreen />
        </MainWrapper>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header />
        <StaticHero
          backgroundImage={getMovieBackdropUrl(movieDetails.backdropPath)}
          rating={movieDetails.rating}
          outOf={movieDetails.outOf}
          movieTitle={movieDetails.title}
          movieYear={movieDetails.year}
          movieGenres={movieDetails.genres && movieDetails.genres.join(" | ")}
          movieRuntime={`${movieDetails.runtime} mins`}
        />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Movie;
