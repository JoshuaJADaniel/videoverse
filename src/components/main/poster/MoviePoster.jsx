import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import MoviePlaceholder from "images/poster-movie-tv.png";

const MoviePoster = ({
  title,
  subtitle,
  imageUrl,
  linkToMovie,
  responsive,
}) => {
  const memoizedImageUrl = useMemo(() => imageUrl || MoviePlaceholder, [
    imageUrl,
  ]);

  return (
    <Poster
      title={title}
      subtitle={subtitle}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToMovie}
      responsive={responsive}
      badge="Movie"
    />
  );
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkToMovie: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

export default MoviePoster;
