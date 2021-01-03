import React from "react";
import styled from "styled-components";
import SvgContainer from "../common/SvgContainer";

const Rating = ({ rating, outOf }) => {
  if (rating && outOf) {
    return (
      <RatingWrapper>
        <SvgContainer>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </SvgContainer>
        <RatingText>
          {rating} / {outOf}
        </RatingText>
      </RatingWrapper>
    );
  }

  return null;
};

const RatingWrapper = styled.div.attrs({
  className: "text-warning",
})`
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

  color: #ddd;
  font-size: 20px;
`;

export default Rating;
