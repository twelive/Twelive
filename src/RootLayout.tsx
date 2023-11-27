import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import NavBar from '@layouts/NavBar';
import MenuBar from '@layouts/MenuBar';
import styled from 'styled-components';

export default function RootLayout() {
  return (
    <LayoutStyle>
      <Header />
      <MenuBar />
      <OutletLayout>
        <Outlet />
      </OutletLayout>
      <NavBar />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OutletLayout = styled.div`
  margin-top: 3.125rem;
`;
