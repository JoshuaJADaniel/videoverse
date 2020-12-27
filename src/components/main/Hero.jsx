import React from "react";
import styled from "styled-components";
import sampleHero from "../../data/sampleHero";

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
    {sampleHero.map((val, index) => {
      if (index === 0) {
        return (
          <li data-target="#hero" data-slide-to={index} className="active" />
        );
      }

      return <li data-target="#hero" data-slide-to={index} />;
    })}
  </ol>
);

const getCarouselItem = (active, backgroundImg) => {
  const classes = active ? "carousel-item active" : "carousel-item";

  const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${backgroundImg});
  `;

  return (
    <div className={classes}>
      <ImageWrapper />
    </div>
  );
};

const Hero = () => (
  <CarouselWrapper>
    {CarouselIndicators}
    <div className="carousel-inner">
      {sampleHero.map((val, index) => {
        if (index === 0) {
          return getCarouselItem(true, val);
        }

        return getCarouselItem(false, val);
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
