import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Router from './Router';
import Menubar from './layouts/MenuBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
        </Provider>
        <Menubar />
      </ThemeProvider>
    </>
  );
}

export default App;
