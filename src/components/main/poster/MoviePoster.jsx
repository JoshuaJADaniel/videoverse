import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import getRandomPoster from "utils/getRandomPoster";

const MoviePoster = ({ title, subtitle, imageUrl, linkToMovie }) => {
  const memoizedImageUrl = useMemo(() => imageUrl || getRandomPoster(), [
    imageUrl,
  ]);

  return (
    <Poster
      title={title}
      subtitle={subtitle}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToMovie}
      badge="Movie"
    />
  );
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkToMovie: PropTypes.string.isRequired,
};

export default MoviePoster;
