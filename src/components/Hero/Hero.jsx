import styled from "styled-components";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import getCarouselItem from "utils/getCarouselItem";
import { initializeHeroCarousel } from "utils/initializeSwiper";

import styles from "./Hero.module.scss";
import { compact } from "lodash";

const Hero = ({ mediaData, multislide }) => {
  useEffect(() => {
    initializeHeroCarousel("hero");
  }, []);

  return (
    <div className={`${styles.heroContainer} swiper-container hero`}>
      <div className="swiper-wrapper">
        {multislide
          ? mediaData.slice(0, 5).map((media) => {
              const badges = compact([
                media.releaseDate.split("-")[0],
                media.mediaType &&
                  (media.mediaType === "movie" ? "Movie" : "TV Show"),
              ]);

              return getCarouselItem(media, badges, styles.carouselSlide);
            })
          : getCarouselItem(mediaData)}
      </div>
      {multislide && <div className="swiper-pagination" />}
    </div>
  );
};

let mediaDataShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  backdropImage: PropTypes.string.isRequired,
  originalLanguage: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
};

Hero.propTypes = {
  mediaData: PropTypes.oneOfType([
    PropTypes.shape(mediaDataShape),
    PropTypes.arrayOf(PropTypes.shape(mediaDataShape)),
  ]),
  multislide: PropTypes.bool,
};

export default Hero;
