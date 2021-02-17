import React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";

import menuItems from "data/menuItems";
import logoText from "images/logo-text.svg";
import logoImage from "images/logo-image.svg";
import SvgContainer from "components/SvgContainer";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ page }) => (
  <aside className={styles.sidebarContainer}>
    <div>
      <a className={styles.logoContainer} href="/">
        <img className={styles.logoImage} alt="VideoVerse" src={logoImage} />
        <img className={styles.logoText} alt="VideoVerse" src={logoText} />
      </a>
      <nav className={styles.navbarContainer}>
        <ul>
          {menuItems.map((item) => (
            <li key={kebabCase(`nav-${item.title}`)}>
              <a
                className={page === item.title ? styles.activeLink : ""}
                href={item.url}
              >
                <SvgContainer>{item.path}</SvgContainer>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className={styles.bottomNavbarContainer}>
      <ul>
        <a href="#">
          <SvgContainer>
            <polyline points="18 16 22 12 18 8" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="10" y1="18" x2="14" y2="6" />
          </SvgContainer>
          <span>Source</span>
        </a>
      </ul>
    </div>
  </aside>
);

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Sidebar;
