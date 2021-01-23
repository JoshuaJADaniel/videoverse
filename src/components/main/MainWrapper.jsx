import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import backgroundImage from "images/background.svg";

const MainWrapper = ({ children }) => (
  <Wrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
    {children}
  </Wrapper>
);

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const Wrapper = styled.main`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
  margin-left: ${(props) => props.theme.sidebarWidth};

  background-size: 120%;
  background-position-y: -5%;
  background-repeat: repeat-y;
  background-position-x: center;
  background-color: ${(props) => props.theme.defaultBackground};
`;

export default MainWrapper;
