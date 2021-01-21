import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";

const getPopularMovies = (callback) => {
  tmdb
    .get(`/movie/popular?api_key=${TMDB_KEY}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error("Popular movies was not populated!");
      }

      callback(
        results.map((movie) => ({
          ...extractMediaDetails(movie),
          mediaType: "movie",
        }))
      );
    })
    .catch((err) => console.log(err));
};

export default getPopularMovies;
