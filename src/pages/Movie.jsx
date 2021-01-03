import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import MainWrapper from "../components/main/MainWrapper";
import StaticHero from "../components/main/StaticHero";
import Sidebar from "../components/sidebar/Sidebar";
import GlobalStyles from "../styles/GlobalStyles";

const Movie = () => {
  const { id } = useParams();
  const [theme] = useState("dark");
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <StaticHero
          rating={7}
          outOf={10}
          movieTitle="Sample Movie Title"
          movieYear={2020}
          movieGenres="Fantasy | Comedy | Thriller"
          movieRuntime="202 min"
        />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Movie;
