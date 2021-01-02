import React from "react";
import { kebabCase, truncate } from "lodash";
import styled from "styled-components";

const ButtonCta = styled.a.attrs({
  className: "btn btn-danger",
  href: "#",
})``;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px -400px 200px -200px
    ${(props) => props.theme.background.level1};
  background-image: url(${(props) => props.backgroundImg});
`;

const getCarouselItem = ({
  active,
  movieYear,
  movieTitle,
  movieRuntime,
  movieOverview,
  backgroundImg,
}) => {
  const classes = active ? "carousel-item active" : "carousel-item";

  return (
    <div key={kebabCase(`bg-${backgroundImg}`)} className={classes}>
      <ImageWrapper backgroundImg={backgroundImg} />
      <div className="carousel-caption text-left">
        <h3 className="font-weight-bold">{movieTitle ?? "Movie Title"}</h3>
        <p>
          {truncate(movieOverview ?? "Movie description.", {
            length: 260,
            separator: " ",
          })}
        </p>
        <ButtonCta>Learn More</ButtonCta>
        <p>
          {movieYear ?? "Movie Year"} &middot; {movieRuntime ?? "Movie Runtime"}
        </p>
      </div>
    </div>
  );
};

export default getCarouselItem;
