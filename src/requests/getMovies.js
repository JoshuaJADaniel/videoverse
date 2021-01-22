import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";
import redirectTo404 from "utils/redirectTo404";

const getMovies = (path, callback, parameters, history) => {
  let queryParameters = [`api_key=${TMDB_KEY}`];
  if (parameters) {
    queryParameters = queryParameters.concat(parameters);
  }

  tmdb
    .get(`${path}?${queryParameters.join("&")}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error(`No movies found! (${path})`);
      }

      callback(
        results.map((movie) => ({
          ...extractMediaDetails(movie),
          mediaType: "movie",
        }))
      );
    })
    .catch((err) => {
      console.log(err);
      if (history) {
        redirectTo404(history);
      }
    });
};

export default getMovies;
