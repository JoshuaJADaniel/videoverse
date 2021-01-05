import LogoDark from "../images/logo-full-dark.svg";
import commonTheme from "./common";

const lightTheme = {
  ...commonTheme,
  logo: LogoDark,

  fontColor: "#000000",
  fontColorMuted: "#888888",
  fontColorNeutral: "#444444",

  posterTitleColor: "#ffffff",
  posterDetailsColor: "#cccccc",
  posterBadgeBackground: "#262626",

  scrollbarThumb: "#666666",
  scrollbarBackground: "#cccccc",

  carouselScrollbar: "rgba(0,0,0,0.4)",
  carouselScrollbarBackground: "rgba(0,0,0,0.1)",

  defaultBackground: "#111111",
  sidebarBackground: "#222222",
  sidebarBackgroundHover: "#333333",

  sidebarColor: "#bbbbbb",
  sidebarColorHover: "#ffffff",
};

export default lightTheme;
