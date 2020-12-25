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
  className: 'form-control',
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

const SvgContainerCustom = styled(SvgContainer).attrs({
  className: 'mb-1',
})`
  display: block;
  stroke-width: 3;
`;

const SearchBar = () => (
  <SearchForm>
    <SearchButton>
      <SvgContainerCustom>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </SvgContainerCustom>
    </SearchButton>
    <SearchInput />
);

export default SearchBar;
