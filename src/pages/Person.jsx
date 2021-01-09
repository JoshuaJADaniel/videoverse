import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import tmdb from "requests/tmdb";
import {
  getPersonCreditsPath,
  getPersonDetailsPath,
} from "requests/getTmdbEndpointPaths";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import PersonSection from "components/main/section/PersonSection";
import MediaSection from "components/main/section/MediaSection";
import MainWrapper from "components/main/MainWrapper";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";
import Loading from "pages/Loading";

const Person = () => {
  const { personId } = useParams();
  const [dark, setDark] = useState(true);
  const [credits, setCredits] = useState([]);
  const [personDetails, setPersonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const loadingDelay = 500;

  const getTheme = () => (dark ? darkTheme : lightTheme);

  useEffect(() => {
    tmdb
      .get(getPersonDetailsPath(personId))
      .then((res) => {
        setTimeout(() => {
          setPersonDetails(res.data);
          setLoading(false);
        }, loadingDelay);
      })
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

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header mode={dark} setMode={setDark} />
        <Separator verticalSpace={20} />
        <PersonSection personData={personDetails} />
        <Separator verticalSpace={80} />
        <MediaSection title="Known For" movieTvBasicData={credits} responsive />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Person;
