import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProductList } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
}

export { Router };
