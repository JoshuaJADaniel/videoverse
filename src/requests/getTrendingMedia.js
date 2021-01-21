import tmdb from "requests/tmdb";
import { TMDB_KEY } from "data/configs";
import redirectTo404 from "utils/redirectTo404";
import extractMediaDetails from "utils/extractMediaDetails";

const getTrendingMedia = (callback) => {
  tmdb
    .get(`/trending/all/week?api_key=${TMDB_KEY}`)
    .then(({ data: { results } }) => {
      if (!results || !results.length) {
        throw new Error("Trending media was not populated!");
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

export default getTrendingMedia;
