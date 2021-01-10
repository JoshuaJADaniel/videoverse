import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Hero = ({ children, multislide }) => (
  <CarouselWrapper>
    {children}
    {multislide && (
      <>
        <a
          className="carousel-control-prev"
          href="#hero"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#hero"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </>
    )}
  </CarouselWrapper>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  multislide: PropTypes.bool,
};

const CarouselWrapper = styled.div.attrs({
  id: "hero",
  className: "carousel slide",
  "data-ride": "carousel",
})`
  height: 85vh;
  min-height: 700px;

  & .carousel-indicators li {
    background-color: ${(props) => props.theme.heroTitleColor};
  }
`;

export default Hero;
