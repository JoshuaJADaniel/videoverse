import { compact } from "lodash";

const createMediaSubtitle = (releaseDate, rating) => {
  const subtitle = [
    releaseDate && releaseDate.split("-")[0],
    rating && `${rating}/10`,
  ];

  return compact(subtitle).join(" • ") || "No Rating";
};

export default createMediaSubtitle;
