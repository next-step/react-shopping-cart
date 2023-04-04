import { createBrowserRouter } from 'react-router-dom';
import { CartPage, OrderPage, OrderListPage, OrderListDetailPage, PrdouctDetailPage, ProductListPage } from 'pages';
import { App } from 'pages/App';
import { Error } from 'pages/Error';

export const ROUTE_URL = {
  PRODUCT_LIST: '/products',
  PRODUCT_DETAIL: '/product/:id',
  CART_LIST: '/carts',
  ORDER_LIST: '/orders',
  ORDER_DETAIL: '/order/:id',
  ORDER: '/order',
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: ROUTE_URL.PRODUCT_LIST, element: <ProductListPage /> },
      { path: ROUTE_URL.PRODUCT_DETAIL, element: <PrdouctDetailPage /> },
      { path: ROUTE_URL.ORDER, element: <OrderPage /> },
      { path: ROUTE_URL.CART_LIST, element: <CartPage /> },
      { path: ROUTE_URL.ORDER_LIST, element: <OrderListPage /> },
      { path: ROUTE_URL.ORDER_DETAIL, element: <OrderListDetailPage /> },
    ],
  },
]);
