import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import NavBar from '@layouts/NavBar';
import MenuBar from '@layouts/MenuBar';

export default function RootLayout() {
  return (
    <>
      <Header />
      <MenuBar />
      <Outlet />
      <NavBar />
    </>
  );
}
