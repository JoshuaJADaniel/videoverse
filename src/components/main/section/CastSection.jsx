import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";

import SwiperRow from "components/main/SwiperRow";
import Section from "components/main/section/Section";
import CastPoster from "components/main/poster/CastPoster";

const CastSection = ({ cast }) => {
  if (cast.length) {
    return (
      <Section title="Cast">
        <SwiperRow>
          {cast.map(
            ({ id: personId, name, gender, character, profile_path }) => (
              <CastPoster
                key={kebabCase(`${name} ${character}`)}
                name={name || ""}
                gender={gender || 1}
                character={character || ""}
                linkToProfile={`/person/${personId}`}
                imageUrl={
                  (profile_path && getPosterImageUrl(profile_path)) || ""
                }
              />
            )
          )}
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
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
      gender: PropTypes.number,
    })
  ),
};

export default CastSection;
