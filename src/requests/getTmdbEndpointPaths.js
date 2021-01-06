import { TMDB_KEY, TMDB_URL } from "../data/configs";

const getMovieDetailsPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}?api_key=${TMDB_KEY}`;

const getCastDetailsPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}/credits?api_key=${TMDB_KEY}`;

const getRelatedMoviesPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}/recommendations?api_key=${TMDB_KEY}`;

export { getMovieDetailsPath, getCastDetailsPath, getRelatedMoviesPath };
