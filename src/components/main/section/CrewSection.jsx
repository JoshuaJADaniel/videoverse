import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import SwiperRow from "components/main/SwiperRow";
import Section from "components/main/section/Section";
import CrewPoster from "components/main/poster/CrewPoster";

const CrewSection = ({ crew }) => {
  if (crew.length) {
    return (
      <Section title="Crew">
        <SwiperRow>
          {crew.map(({ id, name, job, posterImage }) => (
            <CrewPoster
              key={kebabCase(`${name}-${job}`)}
              name={name}
              job={job}
              linkToProfile={`/person/${id}`}
              posterImage={posterImage}
            />
          ))}
        </SwiperRow>
      </Section>
    );
  }

  return null;
};

CrewSection.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      job: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CrewSection;
