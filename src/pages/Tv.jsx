import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import tmdb from "requests/tmdb";
import extractMediaDetails from "utils/extractMediaDetails";
import extractPersonDetails from "utils/extractPersonDetails";
import extractTrailerEmbedUrl from "utils/extractTrailerEmbedUrl";
import {
  getTvDetailsPath,
  getTvVideosPath,
  getRelatedTvPath,
  getTvCreditDetailsPath,
} from "requests/getTmdbEndpointPaths";

import OverviewSection from "components/main/section/OverviewSection";
import MediaSection from "components/main/section/MediaSection";
import CastSection from "components/main/section/CastSection";
import CrewSection from "components/main/section/CrewSection";
import StaticHero from "components/main/hero/StaticHero";
import MainWrapper from "components/main/MainWrapper";
import Separator from "components/common/Separator";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";

import Loading from "pages/Loading";

const Tv = () => {
  const { tvId } = useParams();
  const history = useHistory();
  const [dark, setDark] = useState(true);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [tvDetails, setTvDetails] = useState({});
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [relatedTv, setRelatedTv] = useState([]);
  const getTheme = () => (dark ? darkTheme : lightTheme);
  const loadingDelay = 500;
  const maxCastLength = 15;
  const maxCrewLength = 15;

  useEffect(() => {
    tmdb
      .get(getTvDetailsPath(tvId))
      .then((res) => {
        let newTvDetails = extractMediaDetails(res.data);
        newTvDetails.mediaType = "tv";
        setTvDetails(newTvDetails);
        setTimeout(() => setLoading(false), loadingDelay);
      })
      .catch(() => setTimeout(() => history.push("/404"), loadingDelay));

    tmdb
      .get(getTvCreditDetailsPath(tvId))
      .then((res) => {
        if (res.data.cast) {
          setCastDetails(
            res.data.cast
              .slice(0, maxCastLength)
              .map((person) => extractPersonDetails(person))
          );
        }

        if (res.data.crew) {
          setCrewDetails(
            res.data.crew
              .slice(0, maxCrewLength)
              .map((person) => extractPersonDetails(person))
          );
        }
      })
      .catch((err) => console.log(err));

    tmdb
      .get(getRelatedTvPath(tvId))
      .then((res) => {
        if (res.data.results) {
          setRelatedTv(
            res.data.results.map((tvShow) => {
              let newTvShow = extractMediaDetails(tvShow);
              newTvShow.mediaType = "tv";
              return newTvShow;
            })
          );
        }
      })
      .catch((err) => console.log(err));

    tmdb
      .get(getTvVideosPath(tvId))
      .then((res) => {
        if (res.data.results) {
          setTrailer(extractTrailerEmbedUrl(res.data.results));
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
        <StaticHero data={tvDetails} />
        <Separator verticalSpace={50} />
        <OverviewSection overview={tvDetails.overview} trailer={trailer} />
        <CastSection cast={castDetails} />
        <Separator verticalSpace={50} />
        <CrewSection crew={crewDetails} />
        <Separator verticalSpace={50} />
        <MediaSection title="Related TV Shows" mediaData={relatedTv} />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Tv;
