const REDIRECT_DELAY = 500;

const redirectTo404 = (history) => {
  setTimeout(() => {
    history.push("/404");
  }, REDIRECT_DELAY);
};

export default redirectTo404;
