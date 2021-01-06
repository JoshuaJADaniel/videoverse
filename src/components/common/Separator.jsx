import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Separator = ({ verticalSpace }) => <Wrapper padding={verticalSpace} />;

Separator.propTypes = {
  verticalSpace: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  padding-bottom: ${(props) => props.padding}px;
`;

export default Separator;
