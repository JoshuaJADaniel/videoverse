import { API_IMG_URL, API_KEY } from "../data/configs";
import { trimStart } from "lodash";

const getTrendingPath = ({ mediaType }) =>
  `/trending/${mediaType}/week?api_key=${API_KEY}`;

const getMoviePath = ({ movieId }) =>
  `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

const getBackdropUrl = ({ backdropPath }) =>
  `${API_IMG_URL}/w1280/${trimStart(backdropPath, "/")}`;

export { getTrendingPath, getMoviePath, getBackdropUrl };
