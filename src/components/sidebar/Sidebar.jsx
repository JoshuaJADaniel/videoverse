import React from "react";
import { kebabCase } from "lodash";

import logoText from "images/logo-text.svg";
import logoImage from "images/logo-image.svg";
import SvgContainer from "components/common/SvgContainer";
import menuItems from "data/menuItems";
import "./Sidebar.scss";

const Sidebar = () => (
  <aside id="sidebar">
    <div id="logo">
      <a href="/">
        <img alt="VideoVerse Logo" src={logoImage} />
        <img alt="VideoVerse Text" src={logoText} />
      </a>
    </div>
    <nav id="navigation">
      <ul>
        {menuItems.map((item) => (
          <li key={kebabCase(`nav-${item.title}`)}>
            <a href={item.url}>
              <SvgContainer>{item.path}</SvgContainer>
              <p>{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
