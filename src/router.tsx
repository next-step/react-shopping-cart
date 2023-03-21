import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layouts';
import { Cart, ProductList } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export { Router };
