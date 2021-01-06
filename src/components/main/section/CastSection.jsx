import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";

import Row from "components/main/Row";
import Section from "components/main/section/Section";
import CastPoster from "components/main/poster/CastPoster";

const CastSection = ({ cast }) => {
  if (cast.length) {
    return (
      <Section title="Cast">
        <Row>
          {cast.map(({ name, gender, character, profile_path }) => (
            <CastPoster
              key={kebabCase(`${name} ${character}`)}
              name={name || ""}
              gender={gender || 1}
              character={character || ""}
              linkToProfile={"#"}
              imageUrl={(profile_path && getPosterImageUrl(profile_path)) || ""}
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
      gender: PropTypes.number,
    })
  ),
};

export default CastSection;
