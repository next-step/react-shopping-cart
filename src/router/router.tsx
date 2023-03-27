import { createBrowserRouter } from 'react-router-dom';
import { Home, Cart, ProductDetail } from '../pages';

export const ROUTE = {
  HOME: '/',
  DETAIL: '/products',
  CART: '/cart',
  ORDER: '/order',
  ORDER_LIST: '/order-list',
  ORDER_DETAIL: '/order-detail',
};

export const router = createBrowserRouter([
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
]);
