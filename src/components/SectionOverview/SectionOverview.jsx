import React from "react";
import PropTypes from "prop-types";

import Spacer from "components/Spacer";
import Section from "components/Section";
import { mediaPropTypes } from "data/propTypeValues";

import styles from "./SectionOverview.module.scss";

const SectionOverview = ({ mediaData, trailer }) => {
  const { title, overview } = mediaData;

  return (
    <Section title="Overview">
      <p className={styles.overviewText}>
        {overview || `No overview found for ${title}`}
      </p>
      {trailer && (
        <>
          <Spacer />
          <div className={styles.videoWrapper}>
            <iframe
              frameBorder="0"
              width="1280"
              height="720"
              src={trailer}
              allowFullScreen
            />
          </div>
        </>
      )}
    </Section>
  );
};

SectionOverview.propTypes = {
  mediaData: PropTypes.oneOfType([
    mediaPropTypes,
    PropTypes.shape({}),
    PropTypes.arrayOf(mediaPropTypes),
  ]).isRequired,
};

export default SectionOverview;
