import React, { useState } from "react";
import styled from "styled-components";

const ToggleDiv = styled.div.attrs({
  className: "ml-4",
})`
  position: relative;
  align-self: center;
  flex-shrink: 0;
  flex-grow: 0;
  width: 80px;
  height: 40px;
`;

const ToggleInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 999;

  &:checked + span {
    background-color: ${(props) => props.theme.background.level3};
  }

  &:checked + span:before {
    background-color: ${(props) => props.theme.background.level3};
    transform: translate(55px, -25px);
  }

  &:checked + span:after {
    background-color: #fff;
    transform: translateX(40px);
  }
`;

const ToggleSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  overflow: hidden;
  border-radius: 50px;
  background-color: #fff;
  transition: 0.2s ease background-color, 0.2s ease opacity;
  box-shadow: 0 0 0 2px ${(props) => props.theme.fontColorMuted};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  &:before {
    top: 20px;
    left: -25px;
    background-color: #fff;
    z-index: 1;
  }

  &:after {
    top: 4px;
    left: 4px;
    background-color: ${(props) => props.theme.background.level3};
    z-index: 0;
  }
`;

const ModeToggle = () => {
  const [check, setCheck] = useState(true);

  return (
    <ToggleDiv>
      <ToggleInput checked={check} onChange={() => setCheck(!check)} />
      <ToggleSpan />
    </ToggleDiv>
  );
};

export default ModeToggle;
