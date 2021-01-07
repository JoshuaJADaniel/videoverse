import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";

import Row from "components/main/Row";
import Section from "components/main/section/Section";
import MoviePoster from "components/main/poster/MoviePoster";

const MovieSection = ({ title, moviesBasic }) => {
  if (moviesBasic.length) {
    return (
      <Section title={title}>
        <Row>
          {moviesBasic.map(
            ({ id, title, poster_path, vote_average, release_date }) => (
              <MoviePoster
                key={kebabCase(title)}
                title={title || "Unknown"}
                subtitle={getSubtitle(release_date, vote_average)}
                linkToMovie={`/movie/${id}`}
                imageUrl={(poster_path && getPosterImageUrl(poster_path)) || ""}
              />
            )
          )}
        </Row>
      </Section>
    );
  }

  return null;
};

const getSubtitle = (release_date, vote_average) =>
  (release_date &&
    vote_average &&
    `${release_date.split("-")[0]} • ${vote_average}/10`) ||
  "No Rating";

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
};

export default MovieSection;
