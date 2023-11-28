import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from '@/RootLayout';
import MainListPage from '@pages/MainListPage';
import DetailPage from '@pages/DetailPage';
import ErrorPage from '@pages/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainListPage />} />
          <Route path="/detail/:detailId" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
