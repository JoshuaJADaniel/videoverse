import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import backgroundImg from "../../img/background.svg";
import Header from "../header/Header";
import Hero from "./Hero";
import Row from "./Row";

const Wrapper = styled.main`
  margin-left: ${(props) => props.theme.sidebarWidth};

  background-size: contain;
  background-position-y: -5%;
  background-repeat: repeat-y;
  background-image: url(${backgroundImg});
  background-color: ${(props) => props.theme.background.level1};
`;

const Main = ({ trendingMovies }) => (
  <Wrapper>
    <Header />
    <Hero trendingMovies={trendingMovies} />
    <Row title="Trending" />
    <Row title="Latest Movies" />
    <Row title="Latest TV-Series" />
    <Row title="Top Rated" />
  </Wrapper>
);

Main.propTypes = {
  trendingMovies: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        backdrop_path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Main;
