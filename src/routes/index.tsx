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
import { ROUTES } from 'constants/routes';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route path={ROUTES.PRODUCT_LIST} element={<ProductListPage />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} />

        <Route path={ROUTES.CART} element={<CartPage />} />

        <Route path={ROUTES.ORDER} element={<OrderPage />} />
        <Route path={ROUTES.ORDER_LIST} element={<OrderListPage />} />
        <Route
          path={ROUTES.ORDER_LIST_DETAIL}
          element={<OrderListDetailPage />}
        />

        <Route path="*" element={<Navigate replace to="/product-list" />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
