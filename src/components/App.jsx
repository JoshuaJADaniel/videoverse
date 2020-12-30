import React, { useState, useEffect } from "react";
import Swiper, { Navigation, Scrollbar } from "swiper";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/themes";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import "swiper/swiper-bundle.css";
import "../css/App.css";

const App = () => {
  const [theme] = useState("dark");
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  useEffect(() => {
    Swiper.use([Navigation, Scrollbar]);

    /* eslint-disable no-new */
    new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: "auto",

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <Sidebar />
      <Main />
    </ThemeProvider>
  );
};

export default App;
