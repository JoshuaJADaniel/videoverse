import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Poster.module.scss";

const Poster = ({
  posterImage,
  linkUrl,
  title,
  subtitle,
  badge,
  responsive,
}) => (
  <Link
    to={linkUrl}
    className={`${styles.posterWrapper} ${
      responsive ? styles.posterResponsive : "swiper-slide"
    }`}
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
  </Link>
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
