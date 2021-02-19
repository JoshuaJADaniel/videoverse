import React from "react";
import { useParams } from "react-router-dom";

import BrowseGeneral from "templates/BrowseGeneral";
import extractPersonDetails from "utils/extractPersonDetails";

const People = () => {
  const { page } = useParams();

  return (
    <BrowseGeneral
      title="People"
      pageLink="people"
      pageName="People"
      requestLink="/person/popular"
      currentPage={parseInt(page) || 1}
      extractDetails={(peopleData) =>
        peopleData.map((person) => extractPersonDetails(person))
      }
    />
  );
};

export default People;
