import React from "react";
import styled from "styled-components";
import Navigation from "components/sidebar/Navigation";
import logoImage from "images/logo-image.svg";
import logoText from "images/logo-text.svg";
import "./Sidebar.scss";

const Sidebar = () => (
  <aside id="sidebar">
    <div id="logo">
      <a href="/">
        <img alt="VideoVerse Logo" src={logoImage} />
        <img alt="VideoVerse Text" src={logoText} />
      </a>
    </div>
    <Navigation />
  </aside>
);

export default Sidebar;
