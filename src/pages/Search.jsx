import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { decodeSearch } from "utils/searchUrlConverter";
import extractMediaDetails from "utils/extractMediaDetails";

import BrowseGeneral from "templates/BrowseGeneral";

const Search = () => {
  const { page } = useParams();
  const queryParameters = new URLSearchParams(useLocation().search);
  const searchQuery = decodeSearch(queryParameters.get("s") || "");

  return (
    <BrowseGeneral
      media
      title="Search"
      pageName="Search"
      requestLink="/search/multi"
      pageLink="search"
      query={searchQuery}
      currentPage={parseInt(page) || 1}
      extractDetails={(mediaData) =>
        mediaData.map((media) => extractMediaDetails(media))
      }
    />
  );
};

export default Search;
