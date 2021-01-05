import React from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getRandomPoster from "utils/getRandomPoster";

const CastPoster = ({ name, character, imageUrl, linkToProfile }) => {
  return (
    <Poster
      title={name || "Unknown"}
      imageUrl={imageUrl || getRandomPoster()}
      subtitle={character ? `"${character}"` : '"Unknown"'}
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
