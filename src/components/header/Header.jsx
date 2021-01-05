import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Searchbar from "components/header/Searchbar";
import ToggleMode from "components/header/ToggleMode";
import NavigateHistory from "components/header/NavigateHistory";

const Header = ({ mode, setMode }) => (
  <Wrapper>
    <NavigateHistory />
    <Searchbar />
    <ToggleMode mode={mode} setMode={setMode} />
  </Wrapper>
);

Header.propTypes = {
  mode: PropTypes.bool.isRequired,
  setMode: PropTypes.func.isRequired,
};

const Wrapper = styled.header.attrs({
  className: "d-flex pl-3 pr-4",
})``;

export default Header;
