import React from "react";
import PropTypes from "prop-types";

import styles from "./Section.module.scss";

const Section = ({ title, dropdown, children }) => (
  <section className={`${styles.sectionWrapper} ${dropdown && styles.elevate}`}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children && <div>{children}</div>}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  dropdown: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Section;
