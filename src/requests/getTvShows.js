import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";
import redirectTo404 from "utils/redirectTo404";

const getTvShows = (path, callback, parameters, history) => {
  let queryParameters = [`api_key=${TMDB_KEY}`];
  if (parameters) {
    queryParameters = queryParameters.concat(parameters);
  }

  tmdb
    .get(`${path}?${queryParameters.join("&")}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error(`No TV shows found! (${path})`);
      }

      callback(
        results.map((tvShow) => ({
          ...extractMediaDetails(tvShow),
          mediaType: "tv",
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

export default getTvShows;
