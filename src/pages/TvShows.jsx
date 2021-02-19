import React from "react";
import { useParams } from "react-router-dom";

import BrowseGeneral from "templates/BrowseGeneral";
import extractMediaDetails from "utils/extractMediaDetails";

const TvShows = () => {
  const { page } = useParams();
  const defaultSort = { value: "popularity.desc", label: "Sort: Popularity" };

  const sortByOptions = [
    { value: "popularity.desc", label: "Sort: Popularity" },
    { value: "vote_count.desc", label: "Sort: Vote Count" },
    { value: "vote_average.desc", label: "Sort: Vote Average" },
  ];

  return (
    <BrowseGeneral
      media
      title="TV Shows"
      pageName="TV Shows"
      pageLink="tv-shows"
      requestLink="/discover/tv"
      defaultSort={defaultSort}
      sortByOptions={sortByOptions}
      currentPage={parseInt(page) || 1}
      extractDetails={(mediaData) =>
        mediaData.map((media) => ({
          ...extractMediaDetails(media),
          mediaType: "tv",
        }))
      }
    />
  );
};

export default TvShows;
