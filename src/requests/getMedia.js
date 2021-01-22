import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import extractMediaDetails from "utils/extractMediaDetails";
import redirectTo404 from "utils/redirectTo404";

const getMedia = (path, callback, parameters, history) => {
  let queryParameters = [`api_key=${TMDB_KEY}`];
  if (parameters) {
    queryParameters = queryParameters.concat(parameters);
  }

  tmdb
    .get(`${path}?${queryParameters.join("&")}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error(`No media found! (${path})`);
      }

      callback(results.map((media) => extractMediaDetails(media)));
    })
    .catch((err) => {
      console.log(err);
      if (history) {
        redirectTo404(history);
      }
    });
};

export default getMedia;
