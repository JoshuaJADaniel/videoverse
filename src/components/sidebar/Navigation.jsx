import React from "react";
import styled from "styled-components";
import menuItems from "data/menuItems";
import SvgContainer from "components/common/SvgContainer";
import { kebabCase } from "lodash";

const Navigation = () => (
  <NavUl className="navbar-nav">
    {menuItems.map((item) => (
      <NavItem key={kebabCase(`nav-${item.title}`)} className="nav-item">
        <NavLink href={item.url} className="nav-link d-flex align-items-center">
          <SvgContainer>{item.path}</SvgContainer>
          {item.title}
        </NavLink>
      </NavItem>
    ))}
  </NavUl>
);

const NavUl = styled.ul`
  margin: 0 8px;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  height: 45px;
  padding: 0 16px !important;

  border-radius: 4px;
  transition: color ${(props) => props.theme.defaultTransition};

  font-size: 14px;
  color: ${(props) => props.theme.sidebarColor};

  & svg {
    transition: stroke-width ${(props) => props.theme.defaultTransition};
    margin-right: 18px;
  }

  &:hover {
    color: ${(props) => props.theme.sidebarColorHover};

    & svg {
      stroke-width: 1.7;
    }
  }
`;

export default Navigation;
