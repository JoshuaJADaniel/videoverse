import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import getRandomPoster from "utils/getRandomPoster";
import accessibilityOutline from "styles/accessibilityOutline";

const Poster = ({ imageUrl, linkUrl, title, subtitle, badge }) => (
  <Wrapper href={linkUrl ?? "#"}>
    <Card imageUrl={imageUrl ?? getRandomPoster()} />
    <Title>{title}</Title>
    <Details>
      <Subtitle>{subtitle}</Subtitle>
      <Badge>{badge}</Badge>
    </Details>
  </Wrapper>
);

Poster.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

const Wrapper = styled.a.attrs({
  className: "swiper-slide d-flex flex-column",
})`
  height: auto;
  width: ${(props) => props.theme.posterWidth};

  filter: brightness(0.85);
  transition: filter ${(props) => props.theme.defaultTransition};

  &:hover {
    filter: brightness(1);
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:focus p:first-child {
    ${accessibilityOutline}
  }
`;

const Card = styled.div.attrs({
  className: "card",
})`
  width: ${(props) => props.theme.posterWidth};
  height: ${(props) => props.theme.posterHeight};

  border: none;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
`;

const Details = styled.div.attrs({
  className: "d-flex justify-content-between align-items-center",
})``;

const Title = styled.p.attrs({
  className: "my-2 text-left",
})`
  color: ${(props) => props.theme.posterTitleColor};
`;

const Subtitle = styled.p.attrs({
  className: "mb-0",
})`
  font-size: 14px;
  color: ${(props) => props.theme.posterDetailsColor};
`;

const Badge = styled.p.attrs({
  className: "mb-1 badge",
})`
  color: ${(props) => props.theme.posterDetailsColor};
  background: ${(props) => props.theme.posterBadgeBackground};
  border: 1px solid ${(props) => props.theme.posterDetailsColor};
`;

export default Poster;
