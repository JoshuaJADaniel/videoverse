import React from "react";
import PropTypes from "prop-types";

import Spacer from "components/Spacer";
import Section from "components/Section";

import styles from "./SectionMessage.module.scss";

const SectionMessage = ({ title, subtitle }) => (
  <Section>
    <Spacer space={180} />
    <h1 className={styles.title}>{title}</h1>
    <h3 className={styles.subtitle}>{subtitle}</h3>
  </Section>
);

SectionMessage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionMessage;
