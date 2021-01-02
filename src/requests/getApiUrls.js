import { API_KEY } from "./configs";

const _ = require("lodash");

const getTrendingPath = ({ mediaType }) =>
  `/trending/${mediaType}/week?api_key=${API_KEY}`;

const getMoviePath = ({ movieId }) =>
  `/movie/${movieId}?api_key=${API_KEY}`;

export { getTrendingPath, getMoviePath };
