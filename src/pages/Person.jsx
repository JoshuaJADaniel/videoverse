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
          let moviesBasic = res.data.cast.concat(res.data.crew);

          // Filter movies since a person may be part of the cast and the crew.
          // This leads to duplicate movies (with respect to ID) causing issues
          // since ID is being used as a key prop.
          // This also filters movies that have no title (TMDB issue).
          const idSet = new Set();
          moviesBasic = moviesBasic.filter(({ id, title }) => {
            if (id && title && !idSet.has(id)) {
              idSet.add(id);
              return true;
            }

            return false;
          });

          setCredits(moviesBasic);
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
