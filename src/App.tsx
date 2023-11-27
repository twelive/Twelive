import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from '@/Router';
import GlobalStyles from '@/GlobalStyles';
import theme from '@/theme';

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  const currentTheme = {
    ...theme.device,
    ...(darkMode ? theme.darkMode : theme.lightMode),
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
