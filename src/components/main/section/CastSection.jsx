import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { getProfilePosterUrl } from "requests/getTmdbEndpointUrls";

import Row from "components/main/Row";
import Section from "components/main/section/Section";
import CastPoster from "components/main/poster/CastPoster";

const CastSection = ({ cast }) => {
  if (cast.length) {
    return (
      <Section title="Cast">
        <Row>
          {cast.map((person) => (
            <CastPoster
              key={kebabCase(person.name)}
              name={person.name}
              character={`"${person.character}"`}
              imageUrl={
                person.profile_path && getProfilePosterUrl(person.profile_path)
              }
              linkToProfile={"#"}
            />
          ))}
        </Row>
      </Section>
    );
  }

  return null;
};

CastSection.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastSection;
