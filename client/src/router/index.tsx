import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Cart, OrderList, ProductList } from 'pages';
import Layout from './Layout';

import { PATHS } from 'constants/router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<ProductList />} />
      <Route path={PATHS.CART} element={<Cart />} />
      <Route path={PATHS.ORDER} element={<OrderList />} />
    </Route>
  )
);

export default router;
