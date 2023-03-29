import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home, Cart, ProductDetail } from '../domain';
import { Layout } from '../layout';

export const ROUTE = {
  HOME: '/main',
  DETAIL: '/products',
  CART: '/cart',
  ORDER: '/order',
  ORDER_LIST: '/order-list',
  ORDER_DETAIL: '/order-detail',
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to={ROUTE.HOME} />,
      },
      {
        path: ROUTE.HOME,
        element: <Home />,
      },
      {
        path: ROUTE.CART,
        element: <Cart />,
      },
      {
        path: ROUTE.DETAIL + '/:id',
        element: <ProductDetail />,
      },
      {
        path: '/*',
        element: <Navigate to={ROUTE.HOME} />,
      },
    ],
  },
]);
