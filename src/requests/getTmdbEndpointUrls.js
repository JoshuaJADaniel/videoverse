import { TMDB_IMAGE_URL } from "data/configs";
import { trimStart } from "lodash";

const getMovieBackdropUrl = (backgroundPath) =>
  `${TMDB_IMAGE_URL}/w1280/${trimStart(backgroundPath, "/")}`;

const getPosterImageUrl = (profilePath) =>
  `${TMDB_IMAGE_URL}/w185/${trimStart(profilePath, "/")}`;

export { getMovieBackdropUrl, getPosterImageUrl };
