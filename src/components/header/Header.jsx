import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { encodeSearch } from "utils/searchUrlConverter";
import { getLocalTheme, toggleTheme } from "utils/themeFunctionality";
import SvgContainer from "components/SvgContainer";

import styles from "./Header.module.scss";

const Header = ({ searchText }) => {
  const history = useHistory();
  const [mode, setMode] = useState(getLocalTheme());
  const [search, setSearch] = useState(searchText || "");

  useEffect(() => {
    setSearch(searchText || "");
  }, [searchText]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuContainer}>
        <button id="sidebarToggle" onClick={toggleMenu}>
          <SvgContainer>
            <line x1="2" y1="4" x2="22" y2="4" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="20" x2="22" y2="20" />
          </SvgContainer>
        </button>
      </div>
      <div className={styles.historyContainer}>
        <button title="Go Back" onClick={() => history.go(-1)}>
          <SvgContainer>
            <polyline points="15 4 6 12 15 20" />
          </SvgContainer>
        </button>
        <button title="Go Forward" onClick={() => history.go(+1)}>
          <SvgContainer>
            <polyline points="9 4 18 12 9 20" />
          </SvgContainer>
        </button>
      </div>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/search/1?s=${encodeSearch(search)}`);
          history.go(0);
        }}
      >
        <button type="submit" title="Search">
          <SvgContainer>
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </SvgContainer>
        </button>
        <input
          required
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className={styles.toggleThemeContainer}>
        <button
          title="Change Theme"
          className={mode ? styles.buttonRotation : styles.undoButtonRotation}
          onClick={() => {
            setMode(!mode);
            toggleTheme();
          }}
        >
          {mode ? (
            <SvgContainer>
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </SvgContainer>
          ) : (
            <SvgContainer>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </SvgContainer>
          )}
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  searchText: PropTypes.string,
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
