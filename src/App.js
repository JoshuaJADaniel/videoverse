import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const getTheme = () => {
        return theme === 'light' ? lightTheme : darkTheme;
    };

    return (
        <ThemeProvider theme={getTheme()}>
        </ThemeProvider>
    );
};

export default App;
