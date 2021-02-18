import React from "react";

import BrowseGeneral from "templates/BrowseGeneral";
import extractMediaDetails from "utils/extractMediaDetails";

const Trending = () => (
  <BrowseGeneral
    media
    title="Trending"
    pageLink="trending"
    pageName="Trending"
    requestLink="/trending/all/week"
    extractDetails={(mediaData) =>
      mediaData.map((media) => extractMediaDetails(media))
    }
  />
);

export default Trending;
