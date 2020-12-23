import React from 'react';
import styled from 'styled-components';

const NavUl = styled.ul.attrs({
    className: 'navbar-nav'
})`margin: 0 8px;`;

const Navigation = () => {
    return (
        <NavUl>
        </NavUl>
    )
};

export default Navigation;
