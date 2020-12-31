import { API_KEY, API_IMG_URL } from "./configs";

const _ = require("lodash");

const getTrendingPath = ({ mediaType }) =>
  `/trending/${mediaType}/week?api_key=${API_KEY}`;

const getBackdropUrl = ({ backdropPath }) =>
  `${API_IMG_URL}/w1280/${_.trimStart(backdropPath, "\\")}`;

export { getTrendingPath, getBackdropUrl };
