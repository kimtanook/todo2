import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DetailPage from '../pages/DetailPage';
import Layout from '../display/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
