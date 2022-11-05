import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FeaturedContentPage } from '../pages/FeaturedContentPage';
import { PreviewFilePage } from '../pages/PreviewFilePage';
import { UploadPage } from '../pages/Upload';

const Router = () => {
  return (
    <Routes>
      <Route index element={<FeaturedContentPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/preview" element={<PreviewFilePage />} />
    </Routes>
  );
};

export default Router;
