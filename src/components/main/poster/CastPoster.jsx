import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getRandomPoster from "utils/getRandomPoster";

const CastPoster = ({ name, character, imageUrl, linkToProfile }) => {
  const memoizedImageUrl = useMemo(() => imageUrl || getRandomPoster(), [
    imageUrl,
  ]);

  return (
    <Poster
      title={character || "Unknown"}
      subtitle={name || "Unknown"}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToProfile}
      badge="Cast"
    />
  );
};

CastPoster.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  character: PropTypes.string,
  linkToProfile: PropTypes.string.isRequired,
};

export default CastPoster;
