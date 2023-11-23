import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Menubar from './layouts/MenuBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Menubar/>
        <Header/>
        <NavBar />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
