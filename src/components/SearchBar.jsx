import React from 'react';
import styled from 'styled-components';
import SvgContainer from './SvgContainer';

const Form = styled.form.attrs({
  className: 'd-flex px-4 py-3',
})``;

const Button = styled.button.attrs({
  type: 'submit',
  className: 'btn px-3 py-2',
})``;

const Input = styled.input.attrs({
  type: 'search',
  className: 'form-control flex-grow-1',
  placeholder: 'Search...',
})``;

const SvgContainerCustom = styled(SvgContainer).attrs({
  className: 'mb-1',
})``;

const SearchBar = () => (
  <Form>
    <Button>
      <SvgContainerCustom>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </SvgContainerCustom>
    </Button>
    <Input />
  </Form>
);

export default SearchBar;
