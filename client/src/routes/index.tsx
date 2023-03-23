import { createBrowserRouter } from 'react-router-dom';
import { Cart, Order, OrderList, OrderListDetail, ProductDetail, ProductList } from 'pages';
import App from '../App';
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
      { index: true, element: <ProductList /> },
      { path: ROUTE_URL.PRODUCT_LIST, element: <ProductList /> },
      { path: ROUTE_URL.PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: ROUTE_URL.ORDER, element: <Order /> },
      { path: ROUTE_URL.CART_LIST, element: <Cart /> },
      { path: ROUTE_URL.ORDER_LIST, element: <OrderList /> },
      { path: ROUTE_URL.ORDER_DETAIL, element: <OrderListDetail /> },
    ],
  },
]);
