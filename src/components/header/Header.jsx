import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import ToggleMode from "./ToggleMode";
import NavigateHistory from "./NavigateHistory";

const Header = () => (
  <Wrapper>
    <NavigateHistory />
    <SearchBar />
    <ToggleMode />
  </Wrapper>
);

const Wrapper = styled.header.attrs({
  className: "d-flex pl-3 pr-4",
})``;

export default Header;
