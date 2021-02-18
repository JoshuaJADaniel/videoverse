import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { personPropTypes } from "data/propTypeValues";

import Poster from "components/Poster";
import Section from "components/Section";
import SectionSwiper from "components/SectionSwiper";

import styles from "./SectionPeople.module.scss";

const SectionPeople = ({ title, badge, peopleData, responsive }) => {
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
          responsive={responsive}
        />
      )
    );

    return responsive ? (
      <Section title={title}>
        <div className={styles.responsiveContainer}>{content}</div>
      </Section>
    ) : (
      <SectionSwiper title={title}>{content}</SectionSwiper>
    );
  }

  return null;
};

SectionPeople.propTypes = {
  responsive: PropTypes.bool,
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  peopleData: PropTypes.arrayOf(personPropTypes).isRequired,
};

export default SectionPeople;
