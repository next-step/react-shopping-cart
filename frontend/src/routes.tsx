import { ROUTES } from '@/constants/routes';

import { ProductDetail, ProductList } from '@/product/pages';
import Cart from '@/cart/pages/Cart';
import OrderList from '@/order/pages/OrderList';
import Main from '@/main/pages/Main';

import App from './App';
import CartProvider from '@/context/Cart/CartProvider';

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
