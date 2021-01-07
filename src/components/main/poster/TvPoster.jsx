import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";
import TvPlaceholder from "images/poster-movie-tv.png";

const TvPoster = ({ title, subtitle, imageUrl, linkToTvShow, responsive }) => {
  const memoizedImageUrl = useMemo(() => imageUrl || TvPlaceholder, [imageUrl]);

  return (
    <Poster
      title={title}
      subtitle={subtitle}
      imageUrl={memoizedImageUrl}
      linkUrl={linkToTvShow}
      badge="TV Show"
      responsive={responsive}
    />
  );
};

TvPoster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkToTvShow: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

export default TvPoster;
