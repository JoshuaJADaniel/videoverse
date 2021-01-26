import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import getMedia from "requests/getMedia";

import Loading from "pages/Loading";
import resolveLoading from "utils/resolveLoading";
import { getTheme, getLocalTheme } from "utils/themeFunctionality";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import MainWrapper from "components/main/MainWrapper";
import MediaSection from "components/main/section/MediaSection";
import PaginationSection from "components/main/section/PaginationSection";
import Separator from "components/common/Separator";

const Trending = () => {
  let { page } = useParams();
  const history = useHistory();

  // Make sure page is a number
  if (!/^\d+$/.test(page)) {
    history.push("/trending/1");
    return null;
  }

  const minPage = 1;
  const maxPage = 1000;
  // Use boundary values if page number exceeds limits
  page = Math.max(Math.min(maxPage, parseInt(page)), minPage);

  const [loading, setLoading] = useState(true);
  const [trendingMedia, setTrendingMedia] = useState([]);
  const [dark, setDark] = useState(getLocalTheme());

  useEffect(() => {
    getMedia(
      `/trending/all/week`,
      (data) => {
        setTrendingMedia(data);
        resolveLoading(setLoading);
      },
      [`page=${page}`],
      history
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  const pagination = (
    <PaginationSection
      id="trending"
      minPage={minPage}
      maxPage={maxPage}
      currentPage={page}
    />
  );

  return (
    <ThemeProvider theme={getTheme(dark)}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <Header mode={dark} setMode={setDark} />
        {pagination}
        <MediaSection mediaData={trendingMedia} title="" responsive />
        {pagination}
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Trending;
