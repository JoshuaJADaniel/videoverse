import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    className: 'mr-4',
    viewBox: '0 0 24 24',
    strokeWidth: '1.325',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    stroke: 'currentColor',
    fill: 'none'
})`transition: all 0.2s linear`;

const NavUl = styled.ul.attrs({
    className: 'navbar-nav'
})`margin: 0 8px;`;

const NavItem = styled.li.attrs({
    className: 'nav-item'
})``;

const NavLink = styled.a.attrs({
    className: 'nav-link d-flex align-items-center'
})`
    height: 45px;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 16px !important;
    transition: all 0.2s linear;
    color: ${props => props.theme.fontColorNeutral} !important;
    
    &:hover {
        color: ${props => props.theme.fontColor} !important;
        
        ${SvgContainer} {
            stroke-width: 2;
        }
    }
`;

let menuItems = [
    {
        title: 'Home',
        url: '#',
        path: (
            <React.Fragment>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </React.Fragment>
        )
    },
    {
        title: 'Trending',
        url: '#',
        path: (
            <React.Fragment>
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
            </React.Fragment>
        )
    },
    {
        title: 'Top Rated',
        url: '#',
        path: (
            <React.Fragment>
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </React.Fragment>
        )
    },
    {
        title: 'TV Shows',
        url: '#',
        path: (
            <React.Fragment>
                <polyline points="17 2 12 7 7 2" />
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
            </React.Fragment>
        )
    },
    {
        title: 'Movies',
        url: '#',
        path: (
            <React.Fragment>
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
            </React.Fragment>
        )
    }
];

const Navigation = () => {
    return (
        <NavUl>
            {menuItems.map((item, index) => {
                return (
                    <NavItem key={index}>
                        <NavLink href={item.url}>
                            <SvgContainer>
                                {item.path}
                            </SvgContainer>
                            {item.title}
                        </NavLink>
                    </NavItem>
                );
            })}
        </NavUl>
    )
};

export default Navigation;
