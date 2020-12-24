import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Navigation from './Navigation';

const Sidenav = styled.aside`
    top: 0;
    bottom: 0;
    z-index: 1;
    position: fixed;
    height: 100%;
    width: ${(props) => props.theme.sidebarWidth};
    background: ${(props) => props.theme.background.level2};
`;

const LogoContainer = styled.div`
    padding: 24px;
`;

const LogoWrapper = styled.img`
    width: 100%;
    height: auto;
`;

const Sidebar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Sidenav>
      <LogoContainer>
        <LogoWrapper src={themeContext.logo} />
      </LogoContainer>
      <Navigation />
    </Sidenav>
  );
};

export default Sidebar;
