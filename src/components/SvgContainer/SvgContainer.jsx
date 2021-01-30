import React from "react";
import PropTypes from "prop-types";

const SvgContainer = ({ children }) => (
  <svg
    fill="none"
    width="24"
    height="24"
    strokeWidth="1"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

SvgContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default SvgContainer;
