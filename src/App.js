import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes';
import Sidebar from './Sidebar';
import './App.css';

const Main = styled.div`
    height: 200vh;
    margin-left: ${props => props.theme.sidebarWidth};
    background: ${props => props.theme.background.level1};
`;

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const getTheme = () => {
        return theme === 'light' ? lightTheme : darkTheme;
    };

    return (
        <ThemeProvider theme={getTheme}>
            <Sidebar />
            <Main></Main>
        </ThemeProvider>
    );
};

export default App;
