import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './layouts/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
