import LogoLight from "../images/logo-full-light.svg";
import commonTheme from "./common";

const darkTheme = {
  ...commonTheme,
  logo: LogoLight,

  fontColor: "#ffffff",
  fontColorMuted: "#888888",
  fontColorNeutral: "#bbbbbb",

  posterTitleColor: "#ffffff",
  posterDetailsColor: "#cccccc",
  posterBadgeBackground: "#262626",

  scrollbarThumb: "#808080",
  scrollbarBackground: "#111111",

  carouselScrollbar: "rgba(255,255,255,0.4)",
  carouselScrollbarBackground: "rgba(255,255,255,0.1)",

  defaultBackground: "#111111",
  sidebarBackground: "#222222",
  sidebarBackgroundHover: "#333333",

  sidebarColor: "#bbbbbb",
  sidebarColorHover: "#ffffff",

  navigateHistoryColor: "#bbbbbb",
  navigateHistoryColorHover: "#ffffff",
};

export default darkTheme;
