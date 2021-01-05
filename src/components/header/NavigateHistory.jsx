import React from "react";
import styled from "styled-components";
import SvgContainer from "components/common/SvgContainer";

const NavigateHistory = () => (
  <Wrapper>
    <NavigationButton>
      <SvgContainer>
        <polyline points="15 4 6 12 15 20" />
      </SvgContainer>
    </NavigationButton>
    <NavigationButton>
      <SvgContainer>
        <polyline points="9 4 18 12 9 20" />
      </SvgContainer>
    </NavigationButton>
  </Wrapper>
);

const Wrapper = styled.div.attrs({
  className: "mr-3",
})`
  flex-grow: 0;
  flex-shrink: 0;
  align-self: center;
`;

const NavigationButton = styled.button.attrs({
  className: "mr-1",
})`
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  color: ${(props) => props.theme.fontColorMuted};
  background: ${(props) => props.theme.background.level1};

  body.using-mouse &:focus {
    outline: none;
  }

  & svg {
    vertical-align: middle;
  }
`;

export default NavigateHistory;
