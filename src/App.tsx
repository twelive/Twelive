import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import MainListPage from '../src/pages/MainListPage';
import Menubar from './layouts/MenuBar';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <MainListPage
            url={''}
            title={''}
            channelTitle={''}
            publishedAt={''}
          />
        <Menubar/>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
