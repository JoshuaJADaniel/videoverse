import React from "react";
import PropTypes from "prop-types";

const FullWidthVideo = ({ youtubeEmbedLink }) => (
  <iframe
    width="1280"
    height="720"
    src={youtubeEmbedLink}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

FullWidthVideo.propTypes = {
  youtubeEmbedLink: PropTypes.string.isRequired,
};

export default FullWidthVideo;
