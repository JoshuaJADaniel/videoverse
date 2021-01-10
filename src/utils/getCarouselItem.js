import React from "react";
import styled from "styled-components";
import { kebabCase, truncate } from "lodash";

import RatingDisplay from "components/main/RatingDisplay";
import Separator from "components/common/Separator";
import Badge from "components/common/Badge";

const getCarouselItem = (media, badges, active, standalone) => {
  const { id, title, rating, overview, backdropImage } = media;
  const classes = active ? "carousel-item active" : "carousel-item";

  return (
    <div key={kebabCase(`hero-${id}`)} className={classes}>
      <CarouselBackgroundImage backdropImage={backdropImage} />
      <CarouselCaption standalone={standalone}>
        {rating && (
          <>
            <RatingDisplay rating={rating} outOf={10} />
            <Separator verticalSpace={15} />
          </>
        )}
        <Title className="font-weight-bold">{title}</Title>

        <div className="ml-1">
          {overview && !standalone && (
            <Overview>
              {truncate(overview, {
                length: 260,
                separator: " ",
              })}
            </Overview>
          )}
          {!standalone && (
            <ButtonCta href={`/movie/${id}`}>Learn More</ButtonCta>
          )}
          <Details>
            {badges && badges.map((text) => <Badge key={text}>{text}</Badge>)}
          </Details>
        </div>
      </CarouselCaption>
    </div>
  );
};

const CarouselCaption = styled.div.attrs((props) => ({
  className: `carousel-caption text-left ${props.standalone && "mx-5 px-5"}`,
}))`
  left: ${(props) => props.standalone && "0"};
  right: ${(props) => props.standalone && "0"};
`;

const ButtonCta = styled.a.attrs({
  className: "btn",
})`
  font-weight: bold;

  text-shadow: 0.5px 0 0 currentColor;
  color: ${(props) => props.theme.buttonColor};
  background: ${(props) => props.theme.buttonBackground};
  border: 2px solid ${(props) => props.theme.primaryColor};

  &:hover {
    color: ${(props) => props.theme.buttonColor};
    background: ${(props) => props.theme.buttonBackgroundHover};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.heroTitleColor};
`;

const Overview = styled.p`
  color: ${(props) => props.theme.heroTitleColor};
`;

const Details = styled.div.attrs({
  className: "mt-3",
})`
  color: ${(props) => props.theme.heroDetailsColor};
`;

const CarouselBackgroundImage = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backdropImage});

  box-shadow: inset 0px -475px 200px -200px
    ${(props) => props.theme.defaultBackground};
`;

export default getCarouselItem;
