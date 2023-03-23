import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_URL } from 'routes';
import { App } from '.';
import { NavBar } from 'components/common';
import { CartContextProvider } from 'context/Cart';
import { Cart, ProductList, OrderList } from 'pages';

export default {
  title: 'Application',
  component: App,
} as ComponentMeta<typeof App>;

const CompositionTemplate = () => (
  <CartContextProvider>
    <NavBar />
    <Routes>
      <Route element={<OrderList />} path={ROUTE_URL.ORDER_LIST}></Route>
      <Route element={<Cart />} path={ROUTE_URL.CART_LIST}></Route>
      <Route element={<ProductList />} path={ROUTE_URL.PRODUCT_LIST}></Route>
      <Route element={<ProductList />} path={'/'}></Route>
    </Routes>
  </CartContextProvider>
);

export const AppPage = CompositionTemplate.bind({});
