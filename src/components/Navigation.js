import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../data/menuItems';

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
  fill: 'none',
})`transition: all 0.2s linear`;

const NavUl = styled.ul.attrs({
  className: 'navbar-nav',
})`margin: 0 8px;`;

const NavItem = styled.li.attrs({
  className: 'nav-item',
})``;

const NavLink = styled.a.attrs({
  className: 'nav-link d-flex align-items-center',
})`
    height: 45px;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 16px !important;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.fontColorNeutral} !important;
    
    &:hover {
        color: ${(props) => props.theme.fontColor} !important;
        
        ${SvgContainer} {
            stroke-width: 2;
        }
    }
`;

const Navigation = () => (
  <NavUl>
    {menuItems.map((item, index) => (
      <NavItem key={index}>
        <NavLink href={item.url}>
          <SvgContainer>
            {item.path}
          </SvgContainer>
          {item.title}
        </NavLink>
      </NavItem>
    ))}
  </NavUl>
);

export default Navigation;
