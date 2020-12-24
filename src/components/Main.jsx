import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../img/background.svg';
import SearchBar from './SearchBar';

const Wrapper = styled.main.attrs({
  className: 'pr-3',
})`
    height: 10000px;
    margin-left: ${(props) => props.theme.sidebarWidth};
    background: ${(props) => props.theme.background.level1};
`;

const Background = styled.img`
    top: -20%;
    z-index: -1;
    position: absolute;
    width: calc(100% - ${(props) => props.theme.sidebarWidth});
`;

const Main = () => (
  <Wrapper>
    <Background src={backgroundImg} />
    <SearchBar />
  </Wrapper>
);

export default Main;
