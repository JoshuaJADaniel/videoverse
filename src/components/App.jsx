import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/themes';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import '../css/App.css';

const App = () => {
  const [theme] = useState('dark');

  const getTheme = () => (theme === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={getTheme}>
      <Sidebar />
      <Main />
    </ThemeProvider>
  );
};

export default App;
