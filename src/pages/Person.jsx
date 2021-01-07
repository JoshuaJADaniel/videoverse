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

import MovieTvSection from "components/main/section/MovieTvSection";
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
          let movieTvBasicData = res.data.cast.concat(res.data.crew);

          // Filter since a person may be part of the cast and the crew.This
          // leads to duplicates (with respect to ID) causing issues since ID is
          // being used as a key prop.
          const movieIdSet = new Set();
          const tvIdSet = new Set();
          movieTvBasicData = movieTvBasicData.filter(({ id, media_type }) => {
            if (media_type === "movie") {
              if (!movieIdSet.has(id)) {
                movieIdSet.add(id);
                return true;
              }
            } else {
              if (!tvIdSet.has(id)) {
                tvIdSet.add(id);
                return true;
              }
            }

            return false;
          });

          setCredits(movieTvBasicData);
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
        <MovieTvSection
          title="Known For"
          movieTvBasicData={credits}
          responsive
        />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Person;
