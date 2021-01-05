import React from "react";
import styled from "styled-components";

import Searchbar from "components/header/Searchbar";
import ToggleMode from "components/header/ToggleMode";
import NavigateHistory from "components/header/NavigateHistory";

const Header = () => (
  <Wrapper>
    <NavigateHistory />
    <Searchbar />
    <ToggleMode />
  </Wrapper>
);

const Wrapper = styled.header.attrs({
  className: "d-flex pl-3 pr-4",
})``;

export default Header;
