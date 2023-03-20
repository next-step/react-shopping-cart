import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductDetailPage, ProductListPage, CartPage, PaymentPage, OrderDetailPage, OrderListPage } from '@/pages';
import App from './App';

export const ROUTES_URL = {
  HOME: '/',
  PRODUCT_DETAIL: '/product/:id',
  CARTS: '/carts',
  PAYMENT: '/payment',
  ORDER_LIST: '/order-list',
  ORDER_DETAIL: '/order/:id',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: ROUTES_URL.HOME,
        element: <ProductListPage />,
      },
      {
        path: ROUTES_URL.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
      {
        path: ROUTES_URL.CARTS,
        element: <CartPage />,
      },
      {
        path: ROUTES_URL.PAYMENT,
        element: <PaymentPage />,
      },
      {
        path: ROUTES_URL.ORDER_LIST,
        element: <OrderListPage />,
      },
      {
        path: ROUTES_URL.ORDER_DETAIL,
        element: <OrderDetailPage />,
      },
    ],
  },
]);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
