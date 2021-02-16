import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

import { mediaPropTypes } from "data/propTypeValues";
import createPosterSubtitle from "utils/createPosterSubtitle";

import SectionSwiper from "components/SectionSwiper";
import Section from "components/Section";
import Poster from "components/Poster";

import styles from "./SectionMedia.module.scss";

const SectionMedia = ({ title, mediaData, responsive }) => {
  if (mediaData.length) {
    const content = mediaData.map(
      ({ id, title, posterImage, rating, releaseDate, mediaType }) => (
        <Poster
          badge={mediaType === "tv" ? "Tv Show" : "Movie"}
          key={kebabCase(`${title}-movie-${id}`)}
          title={title}
          subtitle={createPosterSubtitle(releaseDate, rating)}
          linkUrl={`/${mediaType}/${id}`}
          posterImage={posterImage}
          responsive={responsive}
        />
      )
    );

    return responsive ? (
      <Section title={title}>
        <div className={styles.responsiveContainer}>{content}</div>
      </Section>
    ) : (
      <SectionSwiper title={title}>{content}</SectionSwiper>
    );
  }

  return null;
};

SectionMedia.propTypes = {
  title: PropTypes.string.isRequired,
  mediaData: PropTypes.arrayOf(mediaPropTypes).isRequired,
  responsive: PropTypes.bool,
};

export default SectionMedia;
