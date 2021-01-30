import React from "react";
import PropTypes from "prop-types";
import backgroundImage from "images/background.svg";

import styles from "./MainContainer.module.scss";

const MainContainer = ({ children }) => (
  <main
    className={styles.mainContainer}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {children}
  </main>
);

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainContainer;
