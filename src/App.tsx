import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Router from './Router';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const currentTheme = {
    ...theme.device,
    ...(darkMode ? theme.darkMode : theme.lightMode)
  };
  return (
    <>
      <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
