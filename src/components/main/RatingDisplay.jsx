import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SvgContainer from "components/common/SvgContainer";

const RatingDisplay = ({ rating, outOf }) => (
  <RatingWrapper>
    <SvgContainer>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </SvgContainer>
    <RatingText>
      {rating} / {outOf}
    </RatingText>
  </RatingWrapper>
);

RatingDisplay.propTypes = {
  rating: PropTypes.number.isRequired,
  outOf: PropTypes.number.isRequired,
};

const RatingWrapper = styled.div`
  color: ${(props) => props.theme.primaryColor};

  & svg {
    margin-right: 8px;
    fill: currentColor;
    vertical-align: text-bottom;
  }
`;

const RatingText = styled.p`
  display: inline-block;

  margin: 0;
  padding: 0;

  font-size: 20px;
  color: ${(props) => props.theme.heroDetailsColor};
`;

export default RatingDisplay;
