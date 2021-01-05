import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import lightTheme from "themes/light";
import darkTheme from "themes/dark";

import LoadingContainer from "components/common/LoadingContainer";
import MainWrapper from "components/main/MainWrapper";
import Sidebar from "components/sidebar/Sidebar";

const Loading = () => {
  const [theme] = useState("dark");
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <MainWrapper>
        <LoadingContainer />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Loading;
