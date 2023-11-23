import React from 'react';
import GlobalStyles from './GlobalStyles';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './layouts/Header';
import Menubar from './layouts/MenuBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Menubar/>
        <Header/>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
