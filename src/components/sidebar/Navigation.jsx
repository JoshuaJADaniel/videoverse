import React from "react";
import styled from "styled-components";
import menuItems from "data/menuItems";
import SvgContainer from "components/common/SvgContainer";
import { kebabCase } from "lodash";

const Navigation = () => (
  <NavUl>
    {menuItems.map((item) => (
      <NavItem key={kebabCase(`nav-${item.title}`)}>
        <NavLink href={item.url}>
          <CustomSvgContainer>{item.path}</CustomSvgContainer>
          {item.title}
        </NavLink>
      </NavItem>
    ))}
  </NavUl>
);

const CustomSvgContainer = styled(SvgContainer).attrs({
  className: "mr-4",
})``;

const NavUl = styled.ul.attrs({
  className: "navbar-nav",
})`
  margin: 0 8px;
`;

const NavItem = styled.li.attrs({
  className: "nav-item",
})``;

const NavLink = styled.a.attrs({
  className: "nav-link d-flex align-items-center",
})`
  height: 45px;
  padding: 0 16px !important;

  border-radius: 4px;
  transition: color ${(props) => props.theme.defaultTransition};

  font-size: 14px;
  color: ${(props) => props.theme.sidebarColor};

  & svg {
    transition: stroke-width ${(props) => props.theme.defaultTransition};
  }

  &:hover {
    color: ${(props) => props.theme.sidebarColorHover};

    & svg {
      stroke-width: 1.7;
    }
  }
`;

export default Navigation;
