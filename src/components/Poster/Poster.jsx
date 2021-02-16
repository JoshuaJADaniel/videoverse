import React from "react";
import PropTypes from "prop-types";

import styles from "./Poster.module.scss";

const Poster = ({
  posterImage,
  linkUrl,
  title,
  subtitle,
  badge,
  responsive,
}) => (
  <a
    className={`${styles.posterWrapper} ${
      responsive ? styles.posterResponsive : "swiper-slide"
    }`}
    href={linkUrl}
  >
    <div
      className={styles.posterImage}
      style={{ backgroundImage: `url(${posterImage})` }}
    />
    <h3 className={styles.posterTitle}>{title}</h3>
    <div className={styles.posterDetails}>
      <div className={styles.posterSubtitle}>{subtitle}</div>
      <div className={styles.posterBadge}>{badge}</div>
    </div>
  </a>
);

Poster.propTypes = {
  posterImage: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

export default Poster;
