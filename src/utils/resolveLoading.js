const LOADING_DELAY = 500;

const resolveLoading = (setLoading) => {
  setTimeout(() => setLoading(false), LOADING_DELAY);
};

export default resolveLoading;
