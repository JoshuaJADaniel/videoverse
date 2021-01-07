import { TMDB_KEY, TMDB_URL } from "data/configs";

const getMovieDetailsPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}?api_key=${TMDB_KEY}`;

const getCastDetailsPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}/credits?api_key=${TMDB_KEY}`;

const getRelatedMoviesPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}/recommendations?api_key=${TMDB_KEY}`;

const getMovieVideosPath = (movieId) =>
  `${TMDB_URL}/movie/${movieId}/videos?api_key=${TMDB_KEY}`;

const getPersonPath = (personId) =>
  `${TMDB_URL}/person/${personId}?api_key=${TMDB_KEY}`;

const getPersonCreditsPath = (personId) =>
  `${TMDB_URL}/person/${personId}/combined_credits?api_key=${TMDB_KEY}`;

export {
  getMovieDetailsPath,
  getCastDetailsPath,
  getRelatedMoviesPath,
  getMovieVideosPath,
  getPersonPath,
  getPersonCreditsPath,
};
