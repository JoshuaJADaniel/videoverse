import React, { useEffect } from "react";
import PropTypes from "prop-types";
import initializeSwiper from "utils/initializeSwiper";

const SwiperRow = ({ children }) => {
  useEffect(() => {
    initializeSwiper();
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">{children}</div>
      <button
        type="button"
        aria-label="Previous"
        className="swiper-button-prev"
      />
      <button type="button" aria-label="Next" className="swiper-button-next" />
      <div className="swiper-scrollbar" />
    </div>
  );
};

SwiperRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default SwiperRow;
