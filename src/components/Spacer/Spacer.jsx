import React from "react";
import PropTypes from "prop-types";

const Spacer = ({ space }) => <div style={{ paddingBottom: `${space}px` }} />;

Spacer.propTypes = {
  space: PropTypes.number.isRequired,
};

export default Spacer;
