import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProductDetail } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductDetail />} />
    </Routes>
  );
}

export { Router };
