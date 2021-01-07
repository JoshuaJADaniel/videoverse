import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YoutubeVideo = ({ youtubeEmbedLink }) => (
  <Wrapper>
    <iframe
      width="1280"
      height="720"
      frameBorder="0"
      src={youtubeEmbedLink}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Wrapper>
);

YoutubeVideo.propTypes = {
  youtubeEmbedLink: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  position: relative;

  /* Maintains aspect ratio of 16/9 */
  padding-bottom: 56.25%;

  & iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export default YoutubeVideo;
