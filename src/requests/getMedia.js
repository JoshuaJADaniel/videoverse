import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import redirectTo404 from "utils/redirectTo404";
import extractMediaDetails from "utils/extractMediaDetails";

const getMedia = (
  path,
  callback,
  parameters = [],
  routerHistoryObject,
  property = "results"
) => {
  const queryParameters = [`api_key=${TMDB_KEY}`].concat(parameters);

  tmdb
    .get(`${path}?${queryParameters.join("&")}`)
    .then(({ data }) => {
      let mediaType;

      if (path.includes("movie")) {
        mediaType = "movie";
      } else if (path.includes("tv")) {
        mediaType = "tv";
      }

      if (!property) {
        if (mediaType) {
          callback({
            ...extractMediaDetails(data),
            mediaType,
          });
        } else {
          callback(extractMediaDetails(data));
        }
      } else if (data[property] && data[property].length) {
        if (mediaType) {
          callback(
            data[property].map((media) => ({
              ...extractMediaDetails(media),
              mediaType,
            }))
          );
        } else {
          callback(data[property].map((media) => extractMediaDetails(media)));
        }
      } else {
        throw new Error(`No media found! (${path})`);
      }
    })
    .catch((err) => {
      console.log(err);
      if (routerHistoryObject) {
        redirectTo404(routerHistoryObject);
      }
    });
};

export default getMedia;
