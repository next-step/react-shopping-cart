import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductListPage from './ProductList/ProductListPage';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_URL } from 'common/routes';
import ProductDetailPage from './ProductDetail/ProductDetailPage';
import OrderPage from './Order/OrderPage';
import MyOrderListPage from './MyOrderList/MyOrderListPage';
import MyOrderListDetailPage from './MyOrderListDetail/MyOrderListDetailPage';
import CartPage from './Cart/CartPage';
import { NavBar } from 'common/components';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={'/'} index={true} element={<ProductListPage />}></Route>
        <Route path={ROUTE_URL.PRODUCT_LIST} element={<ProductListPage />}></Route>
        <Route path={ROUTE_URL.PRODUCT_DETAIL} element={<ProductDetailPage />}></Route>
        <Route path={ROUTE_URL.ORDER} element={<OrderPage />}></Route>
        <Route path={ROUTE_URL.MY_ORDER_LIST_DETAIL} element={<MyOrderListDetailPage />}></Route>
        <Route path={ROUTE_URL.MY_ORDER_LIST} element={<MyOrderListPage />}></Route>
        <Route path={ROUTE_URL.CART_LIST} element={<CartPage />}></Route>
      </Routes>
    </div>
  );
};

export default {
  title: 'pages/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});

Default.args = {};
