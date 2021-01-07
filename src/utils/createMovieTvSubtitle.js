const createMovieTvSubtitle = (release_date, vote_average) =>
  (release_date &&
    vote_average &&
    `${release_date.split("-")[0]} • ${vote_average}/10`) ||
  "No Rating";

export default createMovieTvSubtitle;
