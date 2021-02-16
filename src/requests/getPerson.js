import tmdb from "requests/tmdb";
import { isEmpty } from "lodash";
import { TMDB_KEY } from "data/configs";
import redirectTo404 from "utils/redirectTo404";
import extractPersonDetails from "utils/extractPersonDetails";

const getPerson = (path, callback, routerHistoryObject) => {
  tmdb
    .get(`${path}?api_key=${TMDB_KEY}`)
    .then(({ data }) => {
      let combinedData = {};
      const possibleProperties = ["results", "crew", "cast"];

      possibleProperties.forEach((property) => {
        if (data[property]) {
          combinedData[property] = data[property].map((person) =>
            extractPersonDetails(person)
          );
        }
      });

      if (isEmpty(combinedData)) {
        combinedData = extractPersonDetails(data);
      }

      callback(combinedData);
    })
    .catch((err) => {
      console.log(err);
      if (routerHistoryObject) {
        redirectTo404(routerHistoryObject);
      }
    });
};

export default getPerson;
