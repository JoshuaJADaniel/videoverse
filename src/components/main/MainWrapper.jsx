import React from "react";
import styled from "styled-components";
import backgroundImage from "../../images/background.svg";

const MainWrapper = (props) => <Wrapper>{props.children}</Wrapper>;

const Wrapper = styled.main`
  height: auto;
  min-height: 100vh;
  margin-left: ${(props) => props.theme.sidebarWidth};

  background-size: contain;
  background-position-y: -5%;
  background-repeat: repeat-y;
  background-image: url(${backgroundImage});
  background-color: ${(props) => props.theme.background.level1};
`;

export default MainWrapper;
