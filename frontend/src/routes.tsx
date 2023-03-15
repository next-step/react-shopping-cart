import { ROUTES } from '@/constants/routes';

import ProductList from '@/product/pages/ProductList';
import Cart from '@/cart/pages/Cart';
import OrderList from '@/order/pages/OrderList';
import Main from '@/main/pages/Main';

import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: ROUTES.PRODUCT_LIST, element: <ProductList /> },
      { path: ROUTES.CART, element: <Cart /> },
      { path: ROUTES.ORDER_LIST, element: <OrderList /> },
    ],
  },
];

export default routes;
