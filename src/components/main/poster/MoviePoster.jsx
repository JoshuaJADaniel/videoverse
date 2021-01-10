import React from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";

const MoviePoster = ({
  title,
  subtitle,
  posterImage,
  linkToMovie,
  responsive,
}) => (
  <Poster
    title={title}
    subtitle={subtitle}
    posterImage={posterImage}
    linkUrl={linkToMovie}
    responsive={responsive}
    badge="Movie"
  />
);

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  linkToMovie: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

export default MoviePoster;
