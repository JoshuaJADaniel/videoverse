import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes';
import backgroundImg from './img/background.svg';
import Sidebar from './Sidebar';
import './css/App.css';

const Background = styled.img`
    top: -20%;
    position: absolute;
    width: calc(100% - ${props => props.theme.sidebarWidth});
`;

const Main = styled.div`
    height: 10000px;
    margin-left: ${props => props.theme.sidebarWidth};
    background: ${props => props.theme.background.level1};
`;

const App = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const getTheme = () => {
        return theme === 'light' ? lightTheme : darkTheme;
    };

    return (
        <ThemeProvider theme={getTheme}>
            <Sidebar />
            <Main>
                <Background src={backgroundImg}/>
            </Main>
        </ThemeProvider>
    );
};

export default App;
