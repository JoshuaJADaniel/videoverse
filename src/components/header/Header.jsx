import React from "react";
import PropTypes from "prop-types";

import SvgContainer from "components/SvgContainer";
import { toggleTheme } from "utils/themeFunctionality";

import styles from "./Header.module.scss";

const Header = ({ mode, setMode }) => (
  <div className={styles.headerContainer}>
    <div className={styles.menuContainer}>
      <button id="sidebarToggle" onClick={toggleMenu}>
        <SvgContainer>
          <line x1="1" y1="4" x2="21" y2="4" />
          <line x1="1" y1="12" x2="21" y2="12" />
          <line x1="1" y1="20" x2="21" y2="20" />
        </SvgContainer>
      </button>
    </div>
    <div className={styles.historyContainer}>
      <button>
        <SvgContainer>
          <polyline points="15 4 6 12 15 20" />
        </SvgContainer>
      </button>
      <button>
        <SvgContainer>
          <polyline points="9 4 18 12 9 20" />
        </SvgContainer>
      </button>
    </div>
    <form className={styles.formContainer}>
      <button>
        <SvgContainer>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SvgContainer>
      </button>
      <input type="text" placeholder="Search..." />
    </form>
    <div className={styles.toggleThemeContainer}>
      <input
        type="checkbox"
        checked={mode}
        onChange={() => {
          setMode(!mode);
          toggleTheme();
        }}
      />
      <span />
    </div>
  </div>
);

Header.propTypes = {
  mode: PropTypes.bool.isRequired,
  setMode: PropTypes.func.isRequired,
};

const toggleMenu = () => {
  const root = document.getElementById("root");
  const toggle = document.getElementById("sidebarToggle");
  if (root.classList.contains("sidebarShift")) {
    root.classList.remove("sidebarShift");
    toggle.classList.remove("sidebarClose");
  } else {
    root.classList.add("sidebarShift");
    toggle.classList.add("sidebarClose");
  }
};

export default Header;
