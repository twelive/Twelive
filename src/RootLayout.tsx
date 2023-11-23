import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
    </>
  );
}
