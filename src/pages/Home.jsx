import React, { useState, useEffect } from "react";

import initializeSwiper from "../utils/initializeSwiper";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  const [theme] = useState("dark");
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  useEffect(() => {
    initializeSwiper();
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
    </ThemeProvider>
  );
};

export default Home;
