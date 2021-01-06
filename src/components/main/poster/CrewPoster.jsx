import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getProfilePlaceholder from "utils/getProfilePlaceholder";

const CrewPoster = ({ name, job, imageUrl, linkToProfile, gender }) => {
  const memoizedImageUrl = useMemo(
    () => imageUrl || getProfilePlaceholder(gender === 1),
    [imageUrl]
  );

  return (
    <Poster
      title={job}
      subtitle={name}
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
