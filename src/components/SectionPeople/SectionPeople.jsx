import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { personPropTypes } from "data/propTypeValues";

import SectionSwiper from "components/SectionSwiper";
import Poster from "components/Poster";

const SectionPeople = ({ title, badge, peopleData }) => {
  if (peopleData.length) {
    const content = peopleData.map(
      ({ id, name, department, job, character, posterImage }) => (
        <Poster
          badge={badge || department === "Acting" ? "Cast" : "Crew"}
          key={kebabCase(`${name}-${character || job}-person-${id}`)}
          title={name}
          subtitle={job || character || department || "Unknown"}
          linkUrl={`/person/${id}`}
          posterImage={posterImage}
        />
      )
    );

    return <SectionSwiper title={title}>{content}</SectionSwiper>;
  }

  return null;
};

SectionPeople.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  peopleData: PropTypes.arrayOf(personPropTypes).isRequired,
};

export default SectionPeople;
