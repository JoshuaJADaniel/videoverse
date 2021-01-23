import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import redirectTo404 from "utils/redirectTo404";
import extractTrailerEmbedUrl from "utils/extractTrailerEmbedUrl";

const getMediaTrailer = (path, callback, routerHistoryObject) => {
  tmdb
    .get(`${path}?api_key=${TMDB_KEY}`)
    .then(({ data: { results } }) => {
      let trailerEmbedUrl;

      if (results && results.length) {
        trailerEmbedUrl = extractTrailerEmbedUrl(results);
      }

      if (trailerEmbedUrl) {
        callback(trailerEmbedUrl);
      }
    })
    .catch((err) => {
      console.log(err);
      if (routerHistoryObject) {
        redirectTo404(routerHistoryObject);
      }
    });
};

export default getMediaTrailer;
