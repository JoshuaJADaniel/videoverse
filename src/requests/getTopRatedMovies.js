import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";

const getTopRatedMovies = (callback) => {
  tmdb
    .get(`/movie/top_rated?api_key=${TMDB_KEY}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error("Top rated movies was not populated!");
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

export default getTopRatedMovies;
