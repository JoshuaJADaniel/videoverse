import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Sidenav = styled.aside`
    top: 0;
    bottom: 0;
    z-index: 1;
    position: fixed;
    height: 100%;
    width: ${props => props.theme.sidebarWidth};
    background: ${props => props.theme.background.level2};
`;

const Navigation = styled.nav`
    color: ${props => props.theme.fontColorNeutral};
`;

const LogoContainer = styled.div`
    padding: 24px;
`;

const LogoWrapper = styled.img`
    width: 100%;
    height: auto;
`;

const Divider = styled.hr`
    padding: 0;
    margin: 0 24px;
    border-top: 1px solid ${props => props.theme.background.level3};
    border-bottom: 1px solid ${props => props.theme.background.level3};
`;

const Sidebar = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Sidenav>
            <Navigation>
                <LogoContainer>
                    <LogoWrapper src={themeContext.logo} />
                </LogoContainer>
                <Divider />
            </Navigation>
        </Sidenav>
    );
};

export default Sidebar;
