import React from "react";
import styled from "styled-components";
import SvgContainer from "../common/SvgContainer";

const Wrapper = styled.div.attrs({
  className: "mr-3",
})`
  align-self: center;
  flex-shrink: 0;
  flex-grow: 0;
`;

const BackForwardButton = styled.button.attrs({
  className: "mr-1",
})`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) => props.theme.fontColorMuted};
  background: ${(props) => props.theme.background.level1};

  & svg {
    vertical-align: middle;
  }
`;

const BackForward = () => (
  <Wrapper>
    <BackForwardButton>
      <SvgContainer>
        <polyline points="15 4 6 12 15 20" />
      </SvgContainer>
    </BackForwardButton>
    <BackForwardButton>
      <SvgContainer>
        <polyline points="9 4 18 12 9 20" />
      </SvgContainer>
    </BackForwardButton>
  </Wrapper>
);

export default BackForward;
