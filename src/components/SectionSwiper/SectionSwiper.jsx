import React, { useEffect } from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";

import Section from "components/Section";
import { initializeRowCarousel } from "utils/initializeSwiper";

const SectionSwiper = ({ title, children }) => {
  const componentId = kebabCase(title);

  useEffect(() => {
    initializeRowCarousel(componentId);
  }, []);

  return (
    <Section title={title}>
      <div className={`${componentId} swiper-container`}>
        <div className="swiper-wrapper">{children}</div>
        <button className="swiper-button-prev" />
        <button className="swiper-button-next" />
        <div className="swiper-scrollbar" />
      </div>
    </Section>
  );
};

SectionSwiper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SectionSwiper;
