import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import accessibilityOutline from "styles/accessibilityOutline";

const ToggleMode = ({ mode, setMode }) => (
  <ToggleDiv>
    <ToggleInput checked={mode} onChange={() => setMode(!mode)} />
    <ToggleSpan />
  </ToggleDiv>
);

ToggleMode.propTypes = {
  mode: PropTypes.bool.isRequired,
  setMode: PropTypes.func.isRequired,
};

const ToggleDiv = styled.div.attrs({
  className: "ml-4",
})`
  width: 80px;
  height: 40px;
  position: relative;

  flex-grow: 0;
  flex-shrink: 0;

  align-self: center;
`;

const ToggleInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  opacity: 0;
  z-index: 999;
  cursor: pointer;

  body.using-mouse &:focus + span {
    outline: none;
  }

  &:focus + span {
    ${accessibilityOutline}
  }

  &:checked + span {
    background-color: #000;
  }

  &:checked + span:before {
    transform: translate(55px, -25px);
    background-color: #000;
  }

  &:checked + span:after {
    background-color: #fff;
    transform: translateX(40px);
  }
`;

const ToggleSpan = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  opacity: 1;
  overflow: hidden;

  border-radius: 50px;
  background-color: #fff;
  transition: 0.2s ease background-color, 0.2s ease opacity;
  box-shadow: 0 0 0 2px ${(props) => props.theme.toggleModeOutlineColor};

  &:before,
  &:after {
    content: "";

    width: 32px;
    height: 32px;

    position: absolute;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  &:before {
    top: 20px;
    left: -25px;
    z-index: 1;

    background-color: #fff;
  }

  &:after {
    top: 4px;
    left: 4px;
    z-index: 0;

    background-color: #000;
  }
`;

export default ToggleMode;
