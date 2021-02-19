import React from "react";
import { useParams } from "react-router-dom";

import BrowseGeneral from "templates/BrowseGeneral";
import extractMediaDetails from "utils/extractMediaDetails";

const Trending = () => {
  const { page } = useParams();

  return (
    <BrowseGeneral
      media
      title="Trending"
      pageName="Trending"
      pageLink="trending"
      requestLink="/trending/all/week"
      currentPage={parseInt(page) || 1}
      extractDetails={(mediaData) =>
        mediaData.map((media) => extractMediaDetails(media))
      }
    />
  );
};

export default Trending;
