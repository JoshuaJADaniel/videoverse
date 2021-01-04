import React from "react";
import styled from "styled-components";
import { compact } from "lodash";

import getRandomBackdrop from "../../utils/getRandomBackdrop";

import Rating from "./Rating";

const StaticHero = ({ data }) => {
  const { title, year, genresText, runtime, backdropUrl, rating, outOf } = data;
  const details = compact([year, genresText, runtime]).join(" • ");

  return (
    <CarouselSlide>
      <CarouselInner>
        <CarouselItem>
          <CarouselBackgroundImage
            backgroundImage={backdropUrl ?? getRandomBackdrop()}
          />
          <CarouselCaptionWrapper>
            <CarouselRatingWrapper>
              <Rating rating={rating} outOf={outOf} />
            </CarouselRatingWrapper>
            <CarouselCaptionTitle>{title ?? "Title"}</CarouselCaptionTitle>
            <CarouselCaptionDetails>{details}</CarouselCaptionDetails>
          </CarouselCaptionWrapper>
        </CarouselItem>
      </CarouselInner>
    </CarouselSlide>
  );
};

const CarouselSlide = styled.div.attrs({
  className: "carousel slide",
})`
  height: 85vh;
`;

const CarouselInner = styled.div.attrs({
  className: "carousel inner",
})`
  height: 100%;
`;

const CarouselItem = styled.div.attrs({
  className: "carousel-item active",
})`
  height: 100%;
`;

const CarouselBackgroundImage = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage});

  box-shadow: inset 0px -400px 200px -200px
    ${(props) => props.theme.background.level1};
`;

const CarouselCaptionWrapper = styled.div.attrs({
  className: "carousel-caption text-left",
})``;

const CarouselRatingWrapper = styled.div.attrs({
  className: "mb-2",
})``;

const CarouselCaptionTitle = styled.h1.attrs({
  className: "mb-3",
})`
  font-weight: bold;
  color: #fff;
`;

const CarouselCaptionDetails = styled.h6.attrs({
  className: "h5",
})`
  color: #ccc;
`;

export default StaticHero;
