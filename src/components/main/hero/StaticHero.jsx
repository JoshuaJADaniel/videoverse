import React, { useMemo } from "react";
import { compact } from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";

import Rating from "components/main/Rating";
import getRandomBackdrop from "utils/getRandomBackdrop";

const StaticHero = ({ data }) => {
  const { title, year, genresText, runtime, imageUrl, rating, outOf } = data;
  const details = compact([year, genresText, runtime]).join(" • ");
  const memoizedImageUrl = useMemo(() => imageUrl || getRandomBackdrop(), [
    imageUrl,
  ]);

  return (
    <CarouselSlide>
      <CarouselInner>
        <CarouselItem>
          <CarouselBackgroundImage imageUrl={memoizedImageUrl} />
          <CarouselCaptionWrapper>
            {rating && (
              <CarouselRatingWrapper>
                <Rating rating={rating} outOf={outOf ?? 10} />
              </CarouselRatingWrapper>
            )}
            <CarouselCaptionTitle>{title}</CarouselCaptionTitle>
            <CarouselCaptionDetails>{details}</CarouselCaptionDetails>
          </CarouselCaptionWrapper>
        </CarouselItem>
      </CarouselInner>
    </CarouselSlide>
  );
};

StaticHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genresText: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    runtime: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    backdropUrl: PropTypes.string.isRequired,
    rating: PropTypes.number,
    outOf: PropTypes.number,
  }),
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
  background-image: url(${(props) => props.imageUrl});

  box-shadow: inset 0px -400px 200px -200px
    ${(props) => props.theme.defaultBackground};
  transition: box-shadow ${(props) => props.theme.defaultTransition};
`;

const CarouselCaptionWrapper = styled.div.attrs({
  className: "carousel-caption text-left",
})``;

const CarouselRatingWrapper = styled.div.attrs({
  className: "mb-2",
})`
  color: ${(props) => props.theme.heroDetailsColor} !important;
  transition: color ${(props) => props.theme.defaultTransition};
`;

const CarouselCaptionTitle = styled.h1.attrs({
  className: "mb-3",
})`
  font-weight: bold;
  color: ${(props) => props.theme.heroTitleColor};
  transition: color ${(props) => props.theme.defaultTransition};
`;

const CarouselCaptionDetails = styled.h6.attrs({
  className: "h5",
})`
  color: ${(props) => props.theme.heroDetailsColor};
  transition: color ${(props) => props.theme.defaultTransition};
`;

export default StaticHero;
