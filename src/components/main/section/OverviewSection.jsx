import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import YoutubeVideo from "components/common/YoutubeVideo";
import Section from "components/main/section/Section";
import Separator from "components/common/Separator";

const OverviewSection = ({ overview, trailer }) => (
  <Section title={"Overview"}>
    {overview && <Overview>{overview}</Overview>}
    <Separator verticalSpace={25} />
    {(trailer && (
      <>
        <YoutubeVideo youtubeEmbedLink={trailer} />
        <Separator verticalSpace={75} />
      </>
    )) || <Separator verticalSpace={40} />}
  </Section>
);

OverviewSection.propTypes = {
  overview: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
};

const Overview = styled.p`
  line-height: 1.7;
  white-space: pre-line;
`;

export default OverviewSection;
