import React from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";

const TvPoster = ({ title, subtitle, posterImage, linkToTv, responsive }) => (
  <Poster
    title={title}
    subtitle={subtitle}
    posterImage={posterImage}
    linkUrl={linkToTv}
    responsive={responsive}
    badge=""
  />
);

TvPoster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  linkToTv: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

export default TvPoster;
