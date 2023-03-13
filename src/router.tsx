import React from 'react';
import List from './pages/List';
import Cart from './pages/Cart';
import OrderList from './pages/OrderList';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  withAuth?: boolean;
}
export const ROUTE = {
  HOME: '/',
  DETAIL: '/detail',
  CART: '/cart',
  ORDER: '/order',
  ORDER_LIST: '/order-list',
  ORDER_DETAIL: '/order-detail',
};

const routerData: RouterElement[] = [
  {
    id: 0,
    path: ROUTE.HOME,
    label: 'Home',
    element: <List />,
    withAuth: false,
  },
  {
    id: 1,
    path: ROUTE.CART,
    label: 'Cart',
    element: <Cart />,
    withAuth: false,
  },
  {
    id: 2,
    path: ROUTE.ORDER_LIST,
    label: 'OrderList',
    element: <OrderList />,
    withAuth: false,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router.element}</Layout>,
    };
  })
);
