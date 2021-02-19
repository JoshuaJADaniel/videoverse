const LOADING_DELAY = 1250;

const resolveLoading = (setLoading) => {
  setTimeout(() => setLoading(false), LOADING_DELAY);
};

export default resolveLoading;
