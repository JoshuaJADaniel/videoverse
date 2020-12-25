import React from 'react';
import styled from 'styled-components';
import SvgContainer from './SvgContainer';

const SearchForm = styled.form.attrs({
  className: 'd-flex px-4 py-3',
})``;

const SearchButton = styled.button.attrs({
  type: 'submit',
  className: 'btn px-3 py-2',
})`
    background: ${(props) => props.theme.background.level3};
    color: ${(props) => props.theme.fontColorMuted};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const SearchInput = styled.input.attrs({
  type: 'search',
  className: 'form-control mr-4',
  placeholder: 'Search...',
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: ${(props) => props.theme.background.level3};
  caret-color: ${(props) => props.theme.fontColor};
  border: none;
  font-size: 18px;
  font-weight: 700;
  
  &::placeholder {
    color: ${(props) => props.theme.fontColorMuted};
  }
  
  &:focus {
    box-shadow: none;
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.background.level3};
  }
`;

const ToggleDiv = styled.div`
  position: relative;
  align-self: center; 
  flex-shrink: 0; 
  flex-grow: 0;
  width: 80px;
  height: 40px;
  
  & input[type="checkbox"] {
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 999;
  }
  
  & span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 1;
    background-color: #fff;
    border-radius: 50px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
    box-shadow: 0 0 0 2px ${(props) => props.theme.fontColorMuted};
  }

  & span:before, & span:after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  & span:before {
    top: 20px;
    left: -25px;
    background-color: #fff;
    z-index: 1;
  }

  & span:after {
    top: 4px;
    left: 4px;
    background-color: ${(props) => props.theme.background.level3};
    z-index: 0;
  }

  & input[type="checkbox"]:checked + span {
    background-color: ${(props) => props.theme.background.level3};
  }

  & input[type="checkbox"]:checked + span:before {
    background-color: ${(props) => props.theme.background.level3};
    transform: translate(55px, -25px);
  }

  & input[type="checkbox"]:checked + span:after {
    background-color: #fff;
    transform: translateX(40px);
  }
`;

const SvgContainerCustom = styled(SvgContainer).attrs({
  className: 'mb-1',
})`
  display: block;
  stroke-width: 3;
`;

const SearchBar = () => (
  <>
    <SearchForm>
      <SearchButton>
        <SvgContainerCustom>
          <circle cx="11" cy="11" r="7"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </SvgContainerCustom>
      </SearchButton>
      <SearchInput/>
    </SearchForm>
    <ToggleDiv>
      <input type="checkbox"/>
      <span/>
    </ToggleDiv>
  </>
);

export default SearchBar;
