import React from "react";
import { Link } from "react-router-dom";
import { kebabCase, truncate } from "lodash";
import SvgContainer from "components/SvgContainer";

const getCarouselItem = (media, badges, styling, multislide) => {
  const {
    id,
    title,
    rating,
    overview,
    mediaType,
    backdropImage,
    posterImage,
  } = media;

  return (
    <Link
      key={kebabCase(`hero-${id}`)}
      className={`${styling} swiper-slide`}
      to={multislide && `/${mediaType}/${id}`}
    >
      <div data-info="background">
        <div
          data-info="backdrop"
          style={{ backgroundImage: `url(${backdropImage})` }}
        />
        <div
          data-info="poster"
          style={{ backgroundImage: `url(${posterImage})` }}
        />
      </div>
      <div data-info="shadow" />
      <div data-info="content">
        {rating !== 0 && (
          <div data-info="rating">
            <SvgContainer>
              <polygon points="10 2 13.09 8.26 20 9.27 15 14.14 16.18 21.02 10 17.77 3.82 21.02 5 14.14 0 9.27 6.91 8.26 10 2" />
            </SvgContainer>
            <span>{rating} / 10</span>
          </div>
        )}
        <div data-info="title">
          <h1>{title}</h1>
        </div>
        {multislide && overview && (
          <div data-info="overview">
            <p>
              {truncate(overview, {
                length: 200,
                separator: " ",
              })}
            </p>
          </div>
        )}
        <div data-info="badge-wrapper">
          {badges.length &&
            badges.map((badgeText) => (
              <span data-info="badge" key={kebabCase(badgeText)}>
                {badgeText}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default getCarouselItem;
