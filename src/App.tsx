import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import MainList from '../src/pages/MainList';
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <MainList url={''} title={''} channelTitle={''} publishedAt={''} />
          <NavBar />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
