import React from "react";
import PropTypes from "prop-types";

import styles from "./Section.module.scss";

const Section = ({ title, subtitle, children }) => (
  <section className={styles.sectionWrapper}>
    {title && <h1 className={styles.title}>{title}</h1>}
    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    {children && <div className={styles.childrenWrapper}>{children}</div>}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Section;
