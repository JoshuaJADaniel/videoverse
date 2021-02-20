import React from "react";
import PropTypes from "prop-types";
import { personPropTypes } from "data/propTypeValues";

import Section from "components/Section";

import styles from "./SectionBio.module.scss";

const SectionBio = ({ personData }) => {
  const {
    name,
    gender,
    birthday,
    deathday,
    biography,
    department,
    placeOfBirth,
    posterImage,
  } = personData;

  const Badge = ({ children }) => (
    <div className={styles.bioBadge}>{children}</div>
  );

  Badge.propTypes = {
    children: PropTypes.string.isRequired,
  };

  return (
    <Section>
      <div className={styles.bioContainer}>
        <h1 className={styles.bioMobileTitle}>{name}</h1>
        <div className={styles.bioImageContainer}>
          <div
            className={styles.bioImage}
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        </div>
        <div className={styles.bioInformationContainer}>
          <h1 className={styles.bioDesktopTitle}>{name}</h1>
          <div>
            <Badge>Gender: {gender}</Badge>
            {placeOfBirth && <Badge>Born: {placeOfBirth}</Badge>}
            {birthday && <Badge>Born on: {birthday}</Badge>}
            {deathday && <Badge>Died on: {deathday}</Badge>}
            {department && <Badge>Department: {department}</Badge>}
          </div>
          <p>{biography || `No biography found for ${name}`}</p>
        </div>
      </div>
    </Section>
  );
};

SectionBio.propTypes = {
  personData: PropTypes.oneOfType([
    personPropTypes.isRequired,
    PropTypes.shape({}),
  ]),
};

export default SectionBio;
