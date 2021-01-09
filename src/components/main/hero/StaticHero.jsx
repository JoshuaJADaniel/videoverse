import React, { useMemo } from "react";
import { compact } from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import backdropPlaceholder from "images/backdrop-placeholder.png";

import RatingDisplay from "components/main/RatingDisplay";

const StaticHero = ({ data }) => {
  const { title, releaseDate, genres, runtime, imageUrl, rating } = data;
  const details = compact([releaseDate, genres.join(" | "), runtime]).join(
    " • "
  );
  const memoizedImageUrl = useMemo(() => imageUrl || backdropPlaceholder, [
    imageUrl,
  ]);

  return (
    <CarouselSlide>
      <CarouselInner>
        <CarouselItem>
          <CarouselBackgroundImage imageUrl={memoizedImageUrl} />
          <CarouselCaptionWrapper>
            {rating !== 0 && (
              <CarouselRatingWrapper>
                <RatingDisplay rating={rating} outOf={10} />
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    runtime: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

const CarouselSlide = styled.div.attrs({
  className: "carousel slide",
})`
  height: 85vh;
  min-height: 700px;
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

  box-shadow: inset 0px -450px 200px -200px
    ${(props) => props.theme.defaultBackground};
`;

const CarouselCaptionWrapper = styled.div.attrs({
  className: "carousel-caption text-left",
})`
  left: 96px;
  right: 96px;
`;

const CarouselRatingWrapper = styled.div.attrs({
  className: "mb-2",
})`
  color: ${(props) => props.theme.heroDetailsColor} !important;
`;

const CarouselCaptionTitle = styled.h1.attrs({
  className: "mb-3",
})`
  font-weight: bold;
  color: ${(props) => props.theme.heroTitleColor};
`;

const CarouselCaptionDetails = styled.h6.attrs({
  className: "h5 ml-1",
})`
  color: ${(props) => props.theme.heroDetailsColor};
`;

export default StaticHero;
