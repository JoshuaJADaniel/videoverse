import React from "react";
import PropTypes from "prop-types";
import backgroundImage from "images/background.svg";
import "./MainWrapper.scss";

const MainWrapper = ({ children }) => (
  <main
    id="main-wrapper"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {children}
  </main>
);

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainWrapper;
