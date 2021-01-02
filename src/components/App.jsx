import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/themes";
import initializeSwiper from "../utils/initializeSwiper";
import GlobalStyles from "../themes/GlobalStyles";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
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

export default App;
