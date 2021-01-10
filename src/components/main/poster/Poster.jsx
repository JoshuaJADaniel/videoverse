import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Poster = ({
  posterImage,
  linkUrl,
  title,
  subtitle,
  badge,
  responsive,
}) => (
  <Wrapper href={linkUrl} responsive={responsive}>
    <Card posterImage={posterImage} responsive={responsive} />
    <Title>{title}</Title>
    <Details>
      <Subtitle>{subtitle}</Subtitle>
      <Badge>{badge}</Badge>
    </Details>
  </Wrapper>
);

Poster.propTypes = {
  posterImage: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
};

const Wrapper = styled.a.attrs((props) => ({
  className: `${
    (props.responsive && "col-2") || "swiper-slide"
  } d-flex flex-column`,
}))`
  height: auto;
  width: ${(props) => !props.responsive && props.theme.posterWidth};

  filter: brightness(0.85);
  transition: filter ${(props) => props.theme.defaultTransition};

  &:hover {
    filter: brightness(1);
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:focus p:not(:last-child) {
    text-decoration: underline;
  }
`;

const Card = styled.div.attrs((props) => ({
  className: "card",
  style: {
    backgroundImage: `url(${props.posterImage})`,
  },
}))`
  width: ${(props) => !props.responsive && props.theme.posterWidth};
  padding-bottom: 150%;

  border: none;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Details = styled.div.attrs({
  className: "d-flex justify-content-between align-items-start",
})``;

const Title = styled.p.attrs({
  className: "my-2 text-left text-nowrap text-truncate",
})`
  color: ${(props) => props.theme.posterTitleColor};
`;

const Subtitle = styled.p.attrs({
  className: "pb-1 mr-2",
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
  transition: none;
`;

export default Poster;
