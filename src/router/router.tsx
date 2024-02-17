import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomeLayout } from '@/layouts';
import { Cart, ProductList, Payment, OrderList, Error } from '@/pages';

import { routes } from './routes';

function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomeLayout />}>
        <Route path={routes.payment} element={<Payment />} />
        <Route path={routes.orders} element={<OrderList />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.home} element={<ProductList />} />
      </Route>
      <Route path="*" element={<Error errorState={404} />} />
    </Routes>
  );
}

export { Router };
