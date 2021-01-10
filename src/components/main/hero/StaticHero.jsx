import React from "react";
import { compact } from "lodash";
import PropTypes from "prop-types";

import getCarouselItem from "utils/getCarouselItem";
import Hero from "components/main/hero/Hero";

const StaticHero = ({ data }) => {
  const badges = compact([
    data.mediaType,
    data.releaseDate,
    data.runtime,
    ...data.genres,
  ]);
  return <Hero>{getCarouselItem(data, badges, true, true)}</Hero>;
};

StaticHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    backdropImage: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default StaticHero;
