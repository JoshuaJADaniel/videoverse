import { TMDB_IMAGE_URL } from "data/configs";
import { trimStart } from "lodash";

const getBackdropImageUrl = (backgroundPath) =>
  `${TMDB_IMAGE_URL}/w1280/${trimStart(backgroundPath, "/")}`;

const getPosterImageUrl = (profilePath, highRes) =>
  `${TMDB_IMAGE_URL}/${highRes ? "w500" : "w185"}/${trimStart(
    profilePath,
    "/"
  )}`;

export { getBackdropImageUrl, getPosterImageUrl };
