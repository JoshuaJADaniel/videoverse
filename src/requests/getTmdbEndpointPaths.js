import { TMDB_KEY, TMDB_URL } from "../data/configs";

const getMovieDetailsPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}?api_key=${TMDB_KEY}`;

export { getMovieDetailsPath };
