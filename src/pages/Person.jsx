import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "requests/tmdb";
import {
  getPersonCreditsPath,
  getPersonPath,
} from "requests/getTmdbEndpointPaths";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import MovieSection from "components/main/section/MovieSection";
import Separator from "components/common/Separator";
import MainWrapper from "components/main/MainWrapper";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

const Person = () => {
  const { id: personId } = useParams();
  const [dark, setDark] = useState(true);
  const [credits, setCredits] = useState([]);
  const loadingDelay = 500;

  const getTheme = () => (dark ? darkTheme : lightTheme);

  useEffect(() => {
    tmdb
      .get(getPersonPath(personId))
      .then((res) => console.log(res.data))
      .catch(() => setTimeout(() => history.push("/404"), loadingDelay));

    tmdb
      .get(getPersonCreditsPath(personId))
      .then((res) => {
        if (res.data.cast && res.data.crew) {
          setCredits(res.data.cast.concat(res.data.crew));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header mode={dark} setMode={setDark} />
        <Separator verticalSpace={50} />
        <MovieSection title="Known For" moviesBasic={credits} responsive />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Person;
