import React from "react";
import styled from "styled-components";
import Navigation from "components/sidebar/Navigation";
import logoImage from "images/logo-image.svg";
import logoText from "images/logo-text.svg";

const Sidebar = () => (
  <Wrapper>
    <LogoContainer>
      <LogoImageWrapper src={logoImage} />
      <LogoTextWrapper src={logoText} />
    </LogoContainer>
    <Navigation />
  </Wrapper>
);

const Wrapper = styled.aside`
  height: 100%;
  width: ${(props) => props.theme.sidebarWidth};

  top: 0;
  bottom: 0;
  position: fixed;

  z-index: 1;
  background: ${(props) => props.theme.sidebarBackground};
`;

const LogoContainer = styled.div.attrs({
  className: "d-flex align-items-center",
})`
  padding: 22px;
`;

const LogoImageWrapper = styled.img`
  width: 28px;
  height: 28px;

  flex-grow: 0;
  flex-shrink: 0;

  margin-right: 14px;
`;

const LogoTextWrapper = styled.img`
  height: 20px;
  width: auto;

  filter: ${(props) => props.theme.logoFilter};
`;

export default Sidebar;
