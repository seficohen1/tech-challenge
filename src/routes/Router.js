import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { FeaturedContentPage } from '../pages/FeaturedContentPage';

const Router = () => {
  return (
    <Routes>
      <Route index element={<FeaturedContentPage />} />
    </Routes>
  );
};

export default Router;
