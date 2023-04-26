import { createBrowserRouter } from 'react-router-dom';
import { CartPage, OrderPage, MyOrderListPage, MyOrderListDetailPage, PrdouctDetailPage, ProductListPage } from 'pages';

import App from 'App';
import { ErrorMessage } from 'common/components';
export const ROUTE_URL = {
  PRODUCT_LIST: '/products',
  PRODUCT_DETAIL: '/product/:id',
  CART_LIST: '/carts',
  MY_ORDER_LIST: '/orders',
  MY_ORDER_LIST_DETAIL: '/orders/:id',
  ORDER: '/order',
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorMessage />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: ROUTE_URL.PRODUCT_LIST, element: <ProductListPage /> },
      { path: ROUTE_URL.PRODUCT_DETAIL, element: <PrdouctDetailPage /> },
      { path: ROUTE_URL.ORDER, element: <OrderPage /> },
      { path: ROUTE_URL.CART_LIST, element: <CartPage /> },
      { path: ROUTE_URL.MY_ORDER_LIST, element: <MyOrderListPage /> },
      { path: ROUTE_URL.MY_ORDER_LIST_DETAIL, element: <MyOrderListDetailPage /> },
    ],
  },
]);
