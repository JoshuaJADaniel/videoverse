import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getProfilePlaceholder from "utils/getProfilePlaceholder";

const CastPoster = ({ name, character, imageUrl, linkToProfile, gender }) => {
  const memoizedImageUrl = useMemo(
    () => imageUrl || getProfilePlaceholder(gender === 1),
    [imageUrl]
  );

  return (
    <Poster
      title={(character && `"${character}"`) || `"Unknown"`}
      subtitle={name || "Unknown"}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToProfile}
      badge="Cast"
    />
  );
};

CastPoster.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  linkToProfile: PropTypes.string.isRequired,
};

export default CastPoster;
