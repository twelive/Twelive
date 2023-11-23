import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import store from './store/store';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import MenuBar from './layouts/MenuBar';

export default function RootLayout() {
  return (
    <Provider store={store}>
        <Header />
        <MenuBar />
        <Outlet />
        <NavBar />
    </Provider>
  );
}