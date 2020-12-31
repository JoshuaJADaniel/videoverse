import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import sampleHero from "../../data/sampleHero";
import { getBackdropUrl } from "../../data/getApiUrls";

const _ = require("lodash");

const CarouselWrapper = styled.div.attrs({
  id: "hero",
  className: "carousel slide mb-5",
  "data-ride": "carousel",
})`
  height: 80vh;
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
  box-shadow: inset 0px -300px 250px -250px black;
  background-image: url(${(props) => props.backgroundImg});
`;

const getCarouselItem = ({
  active,
  backgroundImg,
  movieTitle,
  movieOverview,
}) => {
  const classes = active ? "carousel-item active" : "carousel-item";

  return (
    <div key={_.kebabCase(`bg-${backgroundImg}`)} className={classes}>
      <ImageWrapper backgroundImg={backgroundImg} />
      <div className="carousel-caption text-left">
        <h4 className="font-weight-bold">{movieTitle}</h4>
        <p>
          {_.truncate(movieOverview, {
            length: 260,
            separator: " ",
          })}
        </p>
      </div>
    </div>
  );
};

const Hero = ({ trendingMovies }) => {
  let heroSlides = [];
  if (trendingMovies.results) {
    heroSlides = trendingMovies.results.slice(0, 5);
  }

  return (
    <CarouselWrapper>
      {CarouselIndicators}
      <div className="carousel-inner">
        {heroSlides.map((movieObject, index) => {
          return getCarouselItem({
            active: index === 0,
            movieTitle: movieObject.original_title,
            movieOverview: movieObject.overview,
            backgroundImg: getBackdropUrl({
              backdropPath: movieObject.backdrop_path,
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
  trendingMovies: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        overview: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Hero;
