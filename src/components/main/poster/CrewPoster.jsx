import React from "react";
import PropTypes from "prop-types";
import Poster from "components/main/poster/Poster";

const CrewPoster = ({ name, job, posterImage, linkToProfile }) => (
  <Poster
    title={job}
    subtitle={name}
    posterImage={posterImage}
    linkUrl={linkToProfile}
    badge="Crew"
  />
);

CrewPoster.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  linkToProfile: PropTypes.string.isRequired,
};

export default CrewPoster;
