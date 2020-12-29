import React from "react";
import styled from "styled-components";
import backgroundImg from "../../img/background.svg";
import Header from "../header/Header";
import Hero from "./Hero";

const Wrapper = styled.main`
  height: 10000px;
  margin-left: ${(props) => props.theme.sidebarWidth};
  
  background-size: contain;
  background-position-y: -5%;
  background-repeat: repeat-y;
  background-image: url(${backgroundImg});
  background-color: ${(props) => props.theme.background.level1};
`;

const Main = () => (
  <Wrapper>
    <Header />
    <Hero />
  </Wrapper>
);

export default Main;
