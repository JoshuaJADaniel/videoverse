import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import styled from "styled-components";
import getCarouselItem from "./getCarouselItem";

const CarouselWrapper = styled.div.attrs({
  id: "hero",
  className: "carousel slide mb-5",
  "data-ride": "carousel",
})`
  height: 80vh;
  min-height: 600px;
`;

const Hero = ({ trendingMovies }) => {
  let heroSlides = trendingMovies.slice(0, 5);
  const CarouselIndicators = (
    <ol className="carousel-indicators">
      {heroSlides.map((movieFullObject, index) => (
        <li
          key={kebabCase(`indicator-${movieFullObject.id}`)}
          className={index ? "" : "active"}
          data-slide-to={index}
          data-target="#hero"
        />
      ))}
    </ol>
  );

  return (
    <CarouselWrapper>
      {CarouselIndicators}
      <div className="carousel-inner">
        {heroSlides.map((movieFullObject, index) => {
          return getCarouselItem({
            active: index === 0,
            movieTitle: movieFullObject.original_title,
            movieOverview: movieFullObject.overview,
            movieRuntime: movieFullObject.runtime,
            movieYear: movieFullObject.release_date,
            backgroundImg: getBackdropUrl({
              backdropPath: movieFullObject.backdrop_path,
            }),
          });
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
};

Hero.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Hero;
