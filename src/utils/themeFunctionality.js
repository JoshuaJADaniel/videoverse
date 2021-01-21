import lightTheme from "themes/light";
import darkTheme from "themes/dark";

const THEME_KEY = "dark";
const DEFAULT_THEME = true;

const getTheme = (isDark) => {
  localStorage.setItem(THEME_KEY, String(isDark));

  return isDark ? darkTheme : lightTheme;
};

const getLocalTheme = () => {
  const localTheme = localStorage.getItem(THEME_KEY);

  return localTheme !== null ? localTheme === String(true) : DEFAULT_THEME;
};

export { getTheme, getLocalTheme };
