import LogoDark from "../images/logo-full-dark.svg";
import commonTheme from "./common";

const lightTheme = {
  ...commonTheme,
  logo: LogoDark,
  fontColor: "#000000",
  fontColorMuted: "#888888",
  fontColorNeutral: "#444444",
  scrollbarThumb: "#666666",
  scrollbarBackground: "#cccccc",
  carouselScrollbar: "rgba(0,0,0,0.4)",
  carouselScrollbarBackground: "rgba(0,0,0,0.1)",
  background: {
    level1: "#eeeeee",
    level2: "#dddddd",
    level3: "#cccccc",
  },
};

export default lightTheme;
