import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import redirectTo404 from "utils/redirectTo404";

const getGeneric = (path, callback, parameters, routerHistoryObject) => {
  const queryParameters = [`api_key=${TMDB_KEY}`].concat(parameters);

  tmdb
    .get(`${path}?${queryParameters.join("&")}`)
    .then(({ data }) => {
      callback(data);
    })
    .catch((err) => {
      console.log(err);
      if (routerHistoryObject) {
        redirectTo404(routerHistoryObject);
      }
    });
};

export default getGeneric;
