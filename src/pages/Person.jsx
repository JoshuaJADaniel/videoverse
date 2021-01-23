import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Loading from "pages/Loading";
import getPerson from "requests/getPerson";

import resolveLoading from "utils/resolveLoading";
import { getTheme, getLocalTheme } from "utils/themeFunctionality";
import extractPersonDetails from "utils/extractPersonDetails";
import extractMediaDetails from "utils/extractMediaDetails";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import PersonSection from "components/main/section/PersonSection";
import MediaSection from "components/main/section/MediaSection";
import MainWrapper from "components/main/MainWrapper";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

const Person = () => {
  const { personId } = useParams();
  const history = useHistory();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(getLocalTheme());
  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    getPerson(
      `/person/${personId}`,
      (data) => {
        setPersonDetails(extractPersonDetails(data));
        resolveLoading(setLoading);
      },
      history
    );

    getPerson(`/person/${personId}/credits`, ({ cast, crew }) => {
      if (cast && crew) {
        let mediaDetails = crew
          .concat(cast)
          .map((media) => extractMediaDetails(media));

        // Filter since a person may be part of the cast and the crew.This
        // leads to duplicates (with respect to ID) causing issues since ID is
        // being used as a key prop. Note that movie & TV ID can match.
        const movieIdSet = new Set();
        const tvIdSet = new Set();
        mediaDetails = mediaDetails.filter(({ id, mediaType }) => {
          if (mediaType === "movie") {
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

        setCredits(mediaDetails);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={getTheme(dark)}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header mode={dark} setMode={setDark} />
        <Separator verticalSpace={20} />
        <PersonSection personData={personDetails} />
        <Separator verticalSpace={80} />
        <MediaSection title="Known For" mediaData={credits} responsive />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Person;
