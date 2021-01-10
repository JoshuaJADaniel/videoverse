import React from "react";
import PropTypes from "prop-types";
import { kebabCase, compact } from "lodash";

import Hero from "components/main/hero/Hero";
import getCarouselItem from "utils/getCarouselItem";

const CarouselHero = ({ mediaDetails }) => {
  let heroSlides = mediaDetails.slice(0, 5);
  const CarouselIndicators = (
    <ol className="carousel-indicators">
      {heroSlides.map((media, index) => (
        <li
          key={kebabCase(`indicator-${media.id}`)}
          className={index ? "" : "active"}
          data-slide-to={index}
          data-target="#hero"
        />
      ))}
    </ol>
  );

  return (
    <Hero multislide>
      {CarouselIndicators}
      <div className="carousel-inner">
        {heroSlides.map((media, index) => {
          const badges = compact([
            media.releaseDate.split("-")[0],
            media.mediaType &&
              (media.mediaType === "movie" ? "Movie" : "TV Show"),
            media.originalLanguage &&
              `Original Language: ${media.originalLanguage.toUpperCase()}`,
          ]);

          return getCarouselItem(media, badges, index === 0);
        })}
      </div>
    </Hero>
  );
};

CarouselHero.propTypes = {
  mediaDetails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      backdropImage: PropTypes.string.isRequired,
      originalLanguage: PropTypes.string.isRequired,
      mediaType: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselHero;
