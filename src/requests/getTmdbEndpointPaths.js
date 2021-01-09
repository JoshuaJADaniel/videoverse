import { TMDB_KEY } from "data/configs";

// Media details
const getTvDetailsPath = (tvId) =>
  `/tv/${tvId}?api_key=${TMDB_KEY}&language=en-US`;

const getMovieDetailsPath = (movieId) =>
  `/movie/${movieId}?api_key=${TMDB_KEY}&language=en-US`;

// Media credits details
const getTvCreditDetailsPath = (tvId) =>
  `/tv/${tvId}/credits?api_key=${TMDB_KEY}`;

const getMovieCreditDetailsPath = (movieId) =>
  `/movie/${movieId}/credits?api_key=${TMDB_KEY}`;

// Related media
const getRelatedTvPath = (tvId) =>
  `/tv/${tvId}/recommendations?api_key=${TMDB_KEY}`;

const getRelatedMoviesPath = (movieId) =>
  `/movie/${movieId}/recommendations?api_key=${TMDB_KEY}`;

// Media videos (trailers, bloopers, etc.)
const getTvVideosPath = (tvId) =>
  `/tv/${tvId}/videos?api_key=${TMDB_KEY}&language=en-US`;

const getMovieVideosPath = (movieId) =>
  `/movie/${movieId}/videos?api_key=${TMDB_KEY}&language=en-US`;

// Person details/credits
const getPersonDetailsPath = (personId) =>
  `/person/${personId}?api_key=${TMDB_KEY}`;

const getPersonCreditsPath = (personId) =>
  `/person/${personId}/combined_credits?api_key=${TMDB_KEY}`;

export {
  getTvDetailsPath,
  getMovieDetailsPath,
  getTvCreditDetailsPath,
  getMovieCreditDetailsPath,
  getRelatedTvPath,
  getRelatedMoviesPath,
  getTvVideosPath,
  getMovieVideosPath,
  getPersonDetailsPath,
  getPersonCreditsPath,
};
