import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import SwiperRow from "components/main/SwiperRow";
import Section from "components/main/section/Section";
import CastPoster from "components/main/poster/CastPoster";

const CastSection = ({ cast }) => {
  if (cast.length) {
    return (
      <Section title="Cast">
        <SwiperRow>
          {cast.map(({ id, name, character, posterImage }) => (
            <CastPoster
              key={kebabCase(`${name}-${character}`)}
              name={name}
              character={character}
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

CastSection.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CastSection;
