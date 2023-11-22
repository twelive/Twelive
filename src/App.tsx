import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <NavBar />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
