import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import backgroundImage from "images/background.svg";

const MainWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const Wrapper = styled.main`
  height: auto;
  min-height: 100vh;
  margin-left: ${(props) => props.theme.sidebarWidth};

  background-size: 100%;
  background-position-y: -5%;
  background-repeat: repeat-y;
  background-image: url(${backgroundImage});
  background-color: ${(props) => props.theme.defaultBackground};
`;

export default MainWrapper;
