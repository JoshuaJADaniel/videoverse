import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { kebabCase } from "lodash";

import createPosterSubtitle from "utils/createPosterSubtitle";

import SwiperRow from "components/main/SwiperRow";
import Section from "components/main/section/Section";
import MoviePoster from "components/main/poster/MoviePoster";
import TvPoster from "components/main/poster/TvPoster";

const MediaSection = ({ title, mediaData, responsive }) => {
  if (mediaData.length) {
    const content = mediaData.map(
      ({ id, title, posterImage, rating, releaseDate, mediaType }) =>
        mediaType === "movie" ? (
          <MoviePoster
            key={kebabCase(`${title}-movie-${id}`)}
            title={title}
            subtitle={createPosterSubtitle(releaseDate, rating)}
            linkToMovie={`/movie/${id}`}
            posterImage={posterImage}
            responsive={responsive}
          />
        ) : (
          <TvPoster
            key={kebabCase(`${title}-tv-${id}`)}
            title={title}
            subtitle={createPosterSubtitle(releaseDate, rating)}
            linkToTv={`/tv/${id}`}
            posterImage={posterImage}
            responsive={responsive}
          />
        )
    );

    return (
      <Section title={title}>
        {responsive ? (
          <BootstrapRow>{content}</BootstrapRow>
        ) : (
          <SwiperRow>{content}</SwiperRow>
        )}
      </Section>
    );
  }

  return null;
};

MediaSection.propTypes = {
  title: PropTypes.string.isRequired,
  mediaData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      rating: PropTypes.number,
      posterImage: PropTypes.string,
      releaseDate: PropTypes.string,
      mediaType: PropTypes.string,
    })
  ).isRequired,
  responsive: PropTypes.bool,
};

const BootstrapRow = styled.div.attrs({
  className: "row",
})``;

export default MediaSection;
