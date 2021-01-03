import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import ModeToggle from "./ModeToggle";
import NavigateHistory from "./NavigateHistory";

const Header = () => (
  <Wrapper>
    <NavigateHistory />
    <SearchBar />
    <ModeToggle />
  </Wrapper>
);

const Wrapper = styled.header.attrs({
  className: "d-flex pl-3 pr-4",
})``;

export default Header;
