import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import getMedia from "requests/getMedia";
import getPerson from "requests/getPerson";
import getMediaTrailer from "requests/getMediaTrailer";

import Loading from "pages/Loading";
import resolveLoading from "utils/resolveLoading";
import extractPersonDetails from "utils/extractPersonDetails";
import { getTheme, getLocalTheme } from "utils/themeFunctionality";

import OverviewSection from "components/main/section/OverviewSection";
import MediaSection from "components/main/section/MediaSection";
import CastSection from "components/main/section/CastSection";
import CrewSection from "components/main/section/CrewSection";
import StaticHero from "components/main/hero/StaticHero";
import MainWrapper from "components/main/MainWrapper";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

const TvShow = () => {
  const { tvId } = useParams();
  const history = useHistory();
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(getLocalTheme());
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [tvShowDetails, setTvShowDetails] = useState({});
  const [relatedTvShows, setRelatedTvShows] = useState([]);

  useEffect(() => {
    getMedia(
      `/tv/${tvId}`,
      (data) => {
        setTvShowDetails(data);
        resolveLoading(setLoading);
      },
      [],
      history,
      null
    );

    getPerson(`/tv/${tvId}/credits`, ({ crew, cast }) => {
      if (crew) {
        setCrewDetails(crew.map((person) => extractPersonDetails(person)));
      }

      if (cast) {
        setCastDetails(cast.map((person) => extractPersonDetails(person)));
      }
    });

    getMedia(`/tv/${tvId}/recommendations`, setRelatedTvShows);
    getMediaTrailer(`/tv/${tvId}/videos`, setTrailer);
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
        <StaticHero data={tvShowDetails} />
        <Separator verticalSpace={50} />
        <OverviewSection overview={tvShowDetails.overview} trailer={trailer} />
        <CastSection cast={castDetails} />
        <Separator verticalSpace={50} />
        <CrewSection crew={crewDetails} />
        <Separator verticalSpace={50} />
        <MediaSection title="Related TV Shows" mediaData={relatedTvShows} />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default TvShow;
