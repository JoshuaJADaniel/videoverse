import React from "react";
import { useParams } from "react-router-dom";

import BrowseGeneral from "templates/BrowseGeneral";
import extractMediaDetails from "utils/extractMediaDetails";

const Movies = () => {
  const { page } = useParams();
  const defaultSort = { value: "revenue.desc", label: "Sort: Revenue" };

  const sortByOptions = [
    { value: "revenue.desc", label: "Sort: Revenue" },
    { value: "popularity.desc", label: "Sort: Popularity" },
    { value: "vote_count.desc", label: "Sort: Vote Count" },
    { value: "vote_average.desc", label: "Sort: Vote Average" },
  ];

  return (
    <BrowseGeneral
      media
      title="Movies"
      pageName="Movies"
      pageLink="movies"
      requestLink="/discover/movie"
      defaultSort={defaultSort}
      sortByOptions={sortByOptions}
      currentPage={parseInt(page) || 1}
      extractDetails={(mediaData) =>
        mediaData.map((media) => ({
          ...extractMediaDetails(media),
          mediaType: "movie",
        }))
      }
    />
  );
};

export default Movies;
