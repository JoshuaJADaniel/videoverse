import React from "react";

import BrowseGeneral from "templates/BrowseGeneral";
import extractPersonDetails from "utils/extractPersonDetails";

const People = () => (
  <BrowseGeneral
    title="People"
    pageLink="people"
    pageName="People"
    requestLink="/person/popular"
    extractDetails={(peopleData) =>
      peopleData.map((person) => extractPersonDetails(person))
    }
  />
);

export default People;
