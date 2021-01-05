import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Navigation from "components/sidebar/Navigation";
import logoImage from "images/logo-image.svg";

const Sidebar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
      <LogoContainer>
        <LogoImageWrapper src={logoImage} />
        <LogoTextWrapper src={themeContext.logoText} />
      </LogoContainer>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  height: 100%;
  width: ${(props) => props.theme.sidebarWidth};

  top: 0;
  bottom: 0;
  position: fixed;

  z-index: 1;
  background: ${(props) => props.theme.sidebarBackground};
  transition: background ${(props) => props.theme.defaultTransition};
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

  margin-right: 18px;
`;

const LogoTextWrapper = styled.img`
  height: 20px;
  width: auto;
`;

export default Sidebar;
