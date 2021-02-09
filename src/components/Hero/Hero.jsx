import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { compact } from "lodash";

import getCarouselItem from "utils/getCarouselItem";
import { mediaPropTypes } from "utils/propTypeValues";
import { initializeHeroCarousel } from "utils/initializeSwiper";

import styles from "./Hero.module.scss";

const Hero = ({ mediaData, multislide }) => {
  const componentId = "hero";

  const getBadges = ({ releaseDate, mediaType }) => {
    const year = new Date(releaseDate).getFullYear();
    const media = mediaType && (mediaType === "movie" ? "Movie" : "TV Show");
    return compact([year, media]);
  };

  useEffect(() => {
    initializeHeroCarousel(componentId, multislide);
  }, []);

  return (
    <div className={`${styles.heroContainer} ${componentId} swiper-container`}>
      <div className="swiper-wrapper">
        {multislide
          ? mediaData.map((media) =>
              getCarouselItem(
                media,
                getBadges(media),
                styles.carouselSlide,
                multislide
              )
            )
          : getCarouselItem(
              mediaData,
              getBadges(mediaData),
              styles.carouselSlide,
              multislide
            )}
      </div>
      {multislide && <div className="swiper-pagination" />}
    </div>
  );
};

Hero.propTypes = {
  mediaData: PropTypes.oneOfType([
    mediaPropTypes,
    PropTypes.arrayOf(mediaPropTypes),
  ]).isRequired,
  multislide: PropTypes.bool,
};

export default Hero;
