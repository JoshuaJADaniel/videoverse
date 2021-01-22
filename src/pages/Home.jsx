import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import getMedia from "requests/getMedia";
import getMovies from "requests/getMovies";
import getTvShows from "requests/getTvShows";

import Loading from "pages/Loading";
import resolveLoading from "utils/resolveLoading";
import { getTheme, getLocalTheme } from "utils/themeFunctionality";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import MainWrapper from "components/main/MainWrapper";
import CarouselHero from "components/main/hero/CarouselHero";
import MediaSection from "components/main/section/MediaSection";
import Separator from "components/common/Separator";

const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(getLocalTheme());
  const [trendingMedia, setTrendingMedia] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [popularKidsMovies, setPopularKidsMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getMedia(
      "/trending/all/week",
      (data) => {
        setTrendingMedia(data);
        resolveLoading(setLoading);
      },
      [],
      history
    );

    getTvShows("/tv/popular", setPopularTvShows);
    getMovies("/movie/popular", setPopularMovies);
    getMovies("/movie/top_rated", setTopRatedMovies);
    getMovies("/discover/movie", setPopularKidsMovies, [
      "certification_country=US",
      "certification.lte=G",
      "with_genres=16",
    ]);
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
        <CarouselHero mediaData={trendingMedia} />
        <Separator verticalSpace={75} />
        <MediaSection mediaData={trendingMedia} title="Trending" />
        <Separator verticalSpace={75} />
        <MediaSection mediaData={popularMovies} title="Popular Movies" />
        <Separator verticalSpace={75} />
        <MediaSection mediaData={popularTvShows} title="Popular TV Shows" />
        <Separator verticalSpace={75} />
        <MediaSection
          mediaData={popularKidsMovies}
          title="Popular Kids Movies"
        />
        <Separator verticalSpace={75} />
        <MediaSection mediaData={topRatedMovies} title="Top Rated Movies" />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Home;
