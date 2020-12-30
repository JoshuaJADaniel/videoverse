import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Poster from "./Poster";

const StyledSection = styled.section.attrs({
  className: "mx-5 p-4",
})``;

const StyledHeading = styled.h2.attrs({
  className: "mb-4",
})`
  color: ${(props) => props.theme.fontColor};
`;

const Row = ({ title }) => {
  return (
    <StyledSection>
      <StyledHeading>{title}</StyledHeading>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </div>
        <button
          type="button"
          aria-label="Previous"
          className="swiper-button-prev"
        />
        <button
          type="button"
          aria-label="Next"
          className="swiper-button-next"
        />
        <div className="swiper-scrollbar" />
      </div>
    </StyledSection>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Row;
