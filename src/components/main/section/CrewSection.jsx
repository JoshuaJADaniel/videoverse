import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";

import SwiperRow from "components/main/SwiperRow";
import Section from "components/main/section/Section";
import CrewPoster from "components/main/poster/CrewPoster";

const CrewSection = ({ crew }) => {
  if (crew.length) {
    return (
      <Section title="Crew">
        <SwiperRow>
          {crew.map(({ id, name, gender, job, profile_path }) => (
            <CrewPoster
              key={kebabCase(`${name}-${job}`)}
              name={name || ""}
              job={job || ""}
              gender={gender ?? 0}
              linkToProfile={`/person/${id}`}
              imageUrl={(profile_path && getPosterImageUrl(profile_path)) || ""}
            />
          ))}
        </SwiperRow>
      </Section>
    );
  }

  return null;
};

CrewSection.propTypes = {
  crew: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
      gender: PropTypes.number,
    })
  ),
};

export default CrewSection;
