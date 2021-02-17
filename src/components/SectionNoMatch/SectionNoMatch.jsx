import React from "react";

import Spacer from "components/Spacer";
import Section from "components/Section";

import styles from "./SectionNoMatch.module.scss";

const SectionNoMatch = () => (
  <Section>
    <Spacer space={180} />
    <h1 className={styles.title}>Page not found</h1>
    <h3 className={styles.subtitle}>
      We&#39;re sorry, we couldn&#39;t find the page you requested
    </h3>
  </Section>
);

export default SectionNoMatch;
