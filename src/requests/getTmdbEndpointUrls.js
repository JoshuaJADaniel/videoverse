import { TMDB_IMAGE_URL } from "../data/configs";
import { trimStart } from "lodash";

const getMovieBackdropUrl = (backgroundPath) =>
  `${TMDB_IMAGE_URL}/w1280/${trimStart(backgroundPath, "/")}`;

export { getMovieBackdropUrl };
