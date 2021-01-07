import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";
import createMovieTvSubtitle from "utils/createMovieTvSubtitle";

import SwiperRow from "components/main/Row";
import Section from "components/main/section/Section";
import MoviePoster from "components/main/poster/MoviePoster";
import TvPoster from "components/main/poster/TvPoster";

const MovieTvSection = ({ title, movieTvBasicData, responsive }) => {
  if (movieTvBasicData.length) {
    const content = movieTvBasicData.map(
      ({
        id: movieTvId,
        name: tvTitle,
        title: movieTitle,
        poster_path,
        vote_average,
        release_date: movieRelease,
        first_air_date: tvRelease,
        media_type,
      }) =>
        media_type === "movie" ? (
          <MoviePoster
            key={kebabCase(`${title}-movie-${movieTvId}`)}
            title={movieTitle || "Unknown"}
            subtitle={createMovieTvSubtitle(movieRelease, vote_average)}
            linkToMovie={`/movie/${movieTvId}`}
            imageUrl={(poster_path && getPosterImageUrl(poster_path)) || ""}
            responsive={responsive}
          />
        ) : (
          <TvPoster
            key={kebabCase(`${title}-tv-${movieTvId}`)}
            title={tvTitle || "Unknown"}
            subtitle={createMovieTvSubtitle(tvRelease, vote_average)}
            linkToTvShow={`/tv-show/${movieTvId}`}
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

MovieTvSection.propTypes = {
  title: PropTypes.string.isRequired,
  movieTvBasicData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
      voter_average: PropTypes.number,
      media_type: PropTypes.string,
    })
  ).isRequired,
  responsive: PropTypes.bool,
};

const BootstrapRow = styled.div.attrs({
  className: "row",
})``;

export default MovieTvSection;
