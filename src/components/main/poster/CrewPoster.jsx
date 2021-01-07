import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getProfilePlaceholder from "utils/getProfilePlaceholder";

const CrewPoster = ({ name, job, imageUrl, linkToProfile, gender }) => {
  const memoizedImageUrl = useMemo(
    () => imageUrl || getProfilePlaceholder(gender),
    [imageUrl]
  );

  return (
    <Poster
      title={job || "Unknown"}
      subtitle={name || "Unknown"}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToProfile}
      badge="Crew"
    />
  );
};

CrewPoster.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  gender: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkToProfile: PropTypes.string.isRequired,
};

export default CrewPoster;
