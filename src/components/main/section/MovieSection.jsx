import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";
import createMovieSubtitle from "utils/createMovieSubtitle";

import SwiperRow from "components/main/Row";
import Section from "components/main/section/Section";
import MoviePoster from "components/main/poster/MoviePoster";

const MovieSection = ({ title, moviesBasic, responsive }) => {
  if (moviesBasic.length) {
    const content = moviesBasic.map(
      ({ id: movieId, title, poster_path, vote_average, release_date }) => (
        <MoviePoster
          key={kebabCase(title)}
          title={title || "Unknown"}
          subtitle={createMovieSubtitle(release_date, vote_average)}
          linkToMovie={`/movie/${movieId}`}
          imageUrl={(poster_path && getPosterImageUrl(poster_path)) || ""}
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

MovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  moviesBasic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      voter_average: PropTypes.number,
    })
  ),
  responsive: PropTypes.bool,
};

const BootstrapRow = styled.div.attrs({
  className: "row",
})``;

export default MovieSection;
