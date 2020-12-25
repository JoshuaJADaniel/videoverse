import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import ModeToggle from './ModeToggle';

const Wrapper = styled.header.attrs({
  className: 'd-flex pl-4 pr-5',
})``;

const Header = () => (
  <Wrapper>
    <SearchBar />
    <ModeToggle />
  </Wrapper>
);

export default Header;
