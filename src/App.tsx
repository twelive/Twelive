import React from 'react';
import GlobalStyles from './GlobalStyles';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
