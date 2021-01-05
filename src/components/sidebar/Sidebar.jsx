import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Navigation from "components/sidebar/Navigation";

const Sidebar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
      <LogoContainer>
        <LogoWrapper src={themeContext.logo} />
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

const LogoContainer = styled.div`
  padding: 24px;
`;

const LogoWrapper = styled.img`
  width: 100%;
  height: auto;
`;

export default Sidebar;
