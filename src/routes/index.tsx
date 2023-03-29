import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import {
  CartPage,
  OrderPage,
  OrderListPage,
  OrderListDetailPage,
  ProductListPage,
  ProductDetailPage,
} from 'pages';
import { Layout } from 'components/@common';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/:id" element={<OrderListDetailPage />} />
        <Route path="/order-list" element={<OrderListPage />} />

        <Route path="*" element={<Navigate replace to="/product-list" />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
