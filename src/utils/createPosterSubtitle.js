import { compact } from "lodash";

const createPosterSubtitle = (releaseDate, voteAverage) => {
  const subtitle = [
    releaseDate && releaseDate.split("-")[0],
    voteAverage && `${voteAverage}/10`,
  ];

  return compact(subtitle).join(" • ") || "No Rating";
};

export default createPosterSubtitle;
