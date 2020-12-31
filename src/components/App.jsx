import React, { useState, useEffect } from "react";
import Swiper, { Navigation, Scrollbar } from "swiper";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { lightTheme, darkTheme } from "../themes/themes";
import GlobalStyles from "../themes/GlobalStyles";
import { getTrendingPath } from "../data/getApiUrls";
import { API_URL } from "../data/configs";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import "swiper/swiper-bundle.css";

const App = () => {
  const [theme] = useState("dark");
  const [trendingMovies, setTrendingMovies] = useState({});
  const getTheme = () => (theme === "light" ? lightTheme : darkTheme);

  useEffect(() => {
    const tmdb = axios.create({
      baseURL: API_URL,
    });

    Swiper.use([Navigation, Scrollbar]);

    /* eslint-disable no-new */
    new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: "auto",
      slidesPerGroup: 2,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });

    tmdb.get(getTrendingPath({ mediaType: "movie" })).then((res) => {
      setTrendingMovies(res.data);
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Sidebar />
      <Main trendingMovies={trendingMovies} />
    </ThemeProvider>
  );
};

export default App;
