import React from "react";
import PropTypes from "prop-types";

import styles from "./Spacer.module.scss";

const Spacer = ({ space }) => {
  if (space) {
    return <div style={{ paddingBottom: `${space}px` }} />;
  }

  return <div className={styles.defaultSpacer} />;
};

Spacer.propTypes = {
  space: PropTypes.number,
};

export default Spacer;
