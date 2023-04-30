import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Cart, Order, Home, OrderCheckout, OrderDetail } from 'pages';
import Layout from './Layout';

import { PATHS } from 'constants/router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={PATHS.CART} element={<Cart />} />
      <Route path={PATHS.ORDER} element={<Order />} />
      <Route path={PATHS.ORDER_CHECKOUT} element={<OrderCheckout />} />
      <Route path={`${PATHS.ORDER}/:id`} element={<OrderDetail />} />
    </Route>
  )
);

export default router;
