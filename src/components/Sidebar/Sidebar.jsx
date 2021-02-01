import React, { memo } from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";

import menuItems from "data/menuItems";
import logoText from "images/logo-text.svg";
import logoImage from "images/logo-image.svg";
import SvgContainer from "components/SvgContainer";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ page }) => (
  <aside className={styles.sidebarContainer}>
    <a className={styles.logoContainer} href="/">
      <img className={styles.logoImage} alt="VideoVerse Logo" src={logoImage} />
      <img className={styles.logoText} alt="VideoVerse Text" src={logoText} />
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
              <p>{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default memo(Sidebar);
