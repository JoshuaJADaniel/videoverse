import React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import menuItems from "data/menuItems";
import { logoText, logoImage } from "images/imageLogo";
import SvgContainer from "components/SvgContainer";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ page }) => (
  <aside className={styles.sidebarContainer}>
    <div>
      <Link to="/" className={styles.logoContainer}>
        <div className={styles.logoImage}>{logoImage}</div>
        <div className={styles.logoText}>{logoText}</div>
      </Link>
      <nav className={styles.navbarContainer}>
        <ul>
          {menuItems.map((item) => (
            <li key={kebabCase(`nav-${item.title}`)}>
              <Link
                to={item.url}
                className={page === item.title ? styles.activeLink : ""}
              >
                <SvgContainer>{item.path}</SvgContainer>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className={styles.bottomNavbarContainer}>
      <ul>
        <a href="https://github.com/joshuajadaniel/videoverse">
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
