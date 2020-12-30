import LogoDark from "../img/logo-full-dark.svg";
import LogoLight from "../img/logo-full-light.svg";

const commonTheme = {
  primaryColor: "#e60023",
  sidebarWidth: "230px",
};

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

export { lightTheme, darkTheme };
