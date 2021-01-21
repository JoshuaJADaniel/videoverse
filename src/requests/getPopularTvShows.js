import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";

const getPopularTvShows = (callback) => {
  tmdb
    .get(`/tv/popular?api_key=${TMDB_KEY}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error("Popular TV shows was not populated!");
      }

      callback(
        results.map((movie) => ({
          ...extractMediaDetails(movie),
          mediaType: "tv",
        }))
      );
    })
    .catch((err) => console.log(err));
};

export default getPopularTvShows;
