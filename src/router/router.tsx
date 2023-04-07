import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomeLayout } from '../layouts';
import { Cart, ProductList, Payment, OrderHistory } from '../pages';
import { routes } from './routes';

function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomeLayout />}>
        <Route path={routes.orderList} element={<Payment />} />
        <Route path={routes.orderHistory} element={<OrderHistory />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.home} element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export { Router };
