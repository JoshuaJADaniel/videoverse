import LogoLight from "../images/logo-full-light.svg";
import commonTheme from "./common";

const darkTheme = {
  ...commonTheme,
  logo: LogoLight,

  heroTitleColor: "#ffffff",
  heroDetailsColor: "#cccccc",

  fontColor: "#ffffff",
  fontColorMuted: "#888888",
  fontColorNeutral: "#bbbbbb",

  posterTitleColor: "#ffffff",
  posterDetailsColor: "#cccccc",
  posterBadgeBackground: "#262626",

  scrollbarThumb: "#808080",
  scrollbarThumbHover: "#919191",
  scrollbarBackground: "#111111",

  carouselScrollbar: "rgba(255,255,255,0.4)",
  carouselScrollbarBackground: "rgba(255,255,255,0.1)",

  defaultBackground: "#111111",
  sidebarBackground: "#222222",

  sidebarColor: "#bbbbbb",
  sidebarColorHover: "#ffffff",

  navigateHistoryColor: "#a5a5a5",
  navigateHistoryColorHover: "#ffffff",

  searchbarBackground: "#333333",
  searchButtonColor: "#bbbbbb",
  searchButtonColorHover: "#ffffff",

  searchFieldColor: "#bbbbbb",
  searchFieldColorHover: "#ffffff",

  toggleModeOutlineColor: "#6e6e6e",
};

export default darkTheme;
