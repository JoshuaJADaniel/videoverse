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

  scrollbarThumb: "#b7b7b7",
  scrollbarThumbHover: "#a7a7a7",
  scrollbarBackground: "#f8f8f8",

  carouselScrollbar: "rgba(0,0,0,0.4)",
  carouselScrollbarBackground: "rgba(0,0,0,0.1)",

  defaultBackground: "#f8f8f8",
  sidebarBackground: "#ffffff",

  sidebarColor: "#646464",
  sidebarColorHover: "#000000",

  navigateHistoryColor: "#777777",
  navigateHistoryColorHover: "#000000",

  searchbarBackground: "#ffffff",
  searchButtonColor: "#8f8f8f",
  searchButtonColorHover: "#000000",

  searchFieldColor: "#8f8f8f",
  searchFieldColorHover: "#000000",

  toggleModeOutlineColor: "#c8c8c8",
};

export default lightTheme;
