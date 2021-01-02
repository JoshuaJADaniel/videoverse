import LogoLight from "../img/logo-full-light.svg";
import commonTheme from "./common";

const darkTheme = {
  ...commonTheme,
  logo: LogoLight,
  fontColor: "#ffffff",
  fontColorMuted: "#888888",
  fontColorNeutral: "#bbbbbb",
  scrollbarThumb: "#808080",
  scrollbarBackground: "#111111",
  carouselScrollbar: "rgba(255,255,255,0.4)",
  carouselScrollbarBackground: "rgba(255,255,255,0.1)",
  background: {
    level1: "#111111",
    level2: "#222222",
    level3: "#333333",
  },
};

export default darkTheme;
