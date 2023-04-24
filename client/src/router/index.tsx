import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Cart, OrderList, Home, OrderCheckout } from 'pages';
import Layout from './Layout';

import { PATHS } from 'constants/router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={PATHS.CART} element={<Cart />} />
      <Route path={PATHS.ORDER} element={<OrderList />} />
      <Route path={PATHS.ORDER_CHECKOUT} element={<OrderCheckout />} />
    </Route>
  )
);

export default router;
