import React from "react";
import styled from "styled-components";
import SvgContainer from "components/common/SvgContainer";

const Searchbar = () => (
  <SearchForm>
    <SearchButton>
      <CustomSvgContainer>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </CustomSvgContainer>
    </SearchButton>
    <SearchInput />
  </SearchForm>
);

const SearchForm = styled.form.attrs({
  className: "d-flex py-3 w-100",
})``;

const SearchButton = styled.button.attrs({
  type: "submit",
  className: "btn px-3 py-2",
})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  color: ${(props) => props.theme.searchButtonColor};
  background: ${(props) => props.theme.searchbarBackground};
  transition: color ${(props) => props.theme.defaultTransition};

  &:hover {
    color: ${(props) => props.theme.searchButtonColorHover};
  }
`;

const SearchInput = styled.input.attrs({
  className: "form-control",
  placeholder: "Search...",
})`
  height: 100%;

  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  font-size: 18px;
  font-weight: 700;

  color: ${(props) => props.theme.searchFieldColor};
  caret-color: ${(props) => props.theme.searchFieldColor};
  background: ${(props) => props.theme.searchbarBackground};

  &::placeholder {
    color: ${(props) => props.theme.searchFieldColor};
  }

  &:focus {
    box-shadow: none;
    color: ${(props) => props.theme.searchFieldColorHover};
    background: ${(props) => props.theme.searchbarBackground};
  }
`;

const CustomSvgContainer = styled(SvgContainer).attrs({
  className: "mb-1",
})`
  display: block;
  stroke-width: 3;
`;

export default Searchbar;
