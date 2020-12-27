import React from "react";
import styled from "styled-components";
import sampleHero from "../../data/sampleHero";

const _ = require("lodash");

const CarouselWrapper = styled.div.attrs({
  id: "hero",
  className: "carousel slide pr-3",
  "data-ride": "carousel",
})`
  height: 85vh;
  min-height: 600px;
`;

const CarouselIndicators = (
  <ol className="carousel-indicators">
    {sampleHero.map((imgUrl, index) => (
      <li
        key={_.kebabCase(`indicator-${imgUrl}`)}
        className={index ? "" : "active"}
        data-slide-to={index}
        data-target="#hero"
      />
    ))}
  </ol>
);

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImg});
`;

const getCarouselItem = (active, backgroundImg) => {
  const classes = active ? "carousel-item active" : "carousel-item";

  return (
    <div key={_.kebabCase(`bg-${backgroundImg}`)} className={classes}>
      <ImageWrapper backgroundImg={backgroundImg} />
    </div>
  );
};

const Hero = () => (
  <CarouselWrapper>
    {CarouselIndicators}
    <div className="carousel-inner">
      {sampleHero.map((imgUrl, index) => {
        return getCarouselItem(index === 0, imgUrl);
      })}
    </div>
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
  </CarouselWrapper>
);

export default Hero;
