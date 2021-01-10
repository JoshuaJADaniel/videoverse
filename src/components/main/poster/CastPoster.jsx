import React from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";

const CastPoster = ({ name, character, posterImage, linkToProfile }) => (
  <Poster
    title={`"${character}"`}
    subtitle={name}
    posterImage={posterImage}
    linkUrl={linkToProfile}
    badge="Cast"
  />
);

CastPoster.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  linkToProfile: PropTypes.string.isRequired,
};

export default CastPoster;
