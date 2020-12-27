import React from "react";
import styled from "styled-components";
import menuItems from "../../data/menuItems";
import SvgContainer from "../common/SvgContainer";

const SvgContainerCustom = styled(SvgContainer).attrs({
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
    {menuItems.map((item) => (
      <NavItem key={item.title}>
        <NavLink href={item.url}>
          <SvgContainerCustom>{item.path}</SvgContainerCustom>
          {item.title}
        </NavLink>
      </NavItem>
    ))}
  </NavUl>
);

export default Navigation;
