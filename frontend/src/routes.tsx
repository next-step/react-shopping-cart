import { ROUTES } from '@/constants/routes';

import CartProvider from '@/context/Cart/CartProvider';

import { ProductDetail, ProductList } from '@/product/pages';
import Cart from '@/cart/pages';
import OrderList from '@/order/pages';
import Main from '@/main/pages';

import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      {
        path: ROUTES.PRODUCT_LIST,
        element: (
          <CartProvider>
            <ProductList />
          </CartProvider>
        ),
      },
      {
        path: ROUTES.PRODUCT_DETAIL,
        element: (
          <CartProvider>
            <ProductDetail />
          </CartProvider>
        ),
      },
      {
        path: ROUTES.CART,
        element: (
          <CartProvider>
            <Cart />
          </CartProvider>
        ),
      },
      { path: ROUTES.ORDER_LIST, element: <OrderList /> },
    ],
  },
];

export default routes;
