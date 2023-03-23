import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderList from './pages/OrderList';
import ProductDetail from './pages/ProductDetail';
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
    path: ROUTE.ORDER_LIST,
    element: <OrderList />,
  },
  {
    path: ROUTE.DETAIL + '/:id',
    element: <ProductDetail />,
  },
]);
