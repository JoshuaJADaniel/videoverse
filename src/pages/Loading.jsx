import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import { getTheme, getLocalTheme } from "utils/themeFunctionality";
import LoadingContainer from "components/common/LoadingContainer";
import MainWrapper from "components/main/MainWrapper";
import Sidebar from "components/sidebar/Sidebar";

const Loading = () => (
  <ThemeProvider theme={getTheme(getLocalTheme())}>
    <GlobalStyles />
    <Sidebar />
    <MainWrapper>
      <LoadingContainer />
    </MainWrapper>
  </ThemeProvider>
);

export default Loading;
