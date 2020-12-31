import React from "react";
import styled from "styled-components";
import getRandomPoster from "../../utils/getRandomPoster";

const StyledCardWrapper = styled.a.attrs({
  className: "swiper-slide d-flex flex-column",
  href: "#",
})`
  width: 192px;
  filter: brightness(0.9);
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1);
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:focus p {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 1px;
  }
`;

const StyledCard = styled.div.attrs({
  className: "card h-100 swiper-lazy",
})`
  border: none;
  overflow: hidden;
  width: 192px;
  height: 300px !important;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
`;

const StyledTitle = styled.p.attrs({
  className: "mt-3 mb-4 text-left",
})`
  margin: 0;
  color: ${(props) => props.theme.fontColor};
`;

const Poster = () => (
  <StyledCardWrapper>
    <StyledCard imgUrl={getRandomPoster()} />
    <StyledTitle>Sample Movie Title</StyledTitle>
  </StyledCardWrapper>
);

export default Poster;