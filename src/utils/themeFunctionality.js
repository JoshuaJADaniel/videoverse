const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

const getLocalTheme = () => {
  const localTheme = localStorage.getItem(THEME_KEY);

  if (localTheme !== LIGHT) {
    document.body.classList.add(DARK);
  } else {
    document.body.classList.remove(DARK);
  }

  return localTheme !== LIGHT;
};

const toggleTheme = () => {
  if (document.body.classList.contains(DARK)) {
    localStorage.setItem(THEME_KEY, LIGHT);
    document.body.classList.remove(DARK);
  } else {
    localStorage.setItem(THEME_KEY, DARK);
    document.body.classList.add(DARK);
  }
};

export { getLocalTheme, toggleTheme };
