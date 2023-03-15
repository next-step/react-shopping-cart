import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import { Cart, Order, OrderList, OrderListDetail, ProductDetail, ProductList } from 'pages';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/orderList" element={<OrderList />} />
      <Route path="/orderListDetail" element={<OrderListDetail />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/productListDetail" element={<ProductDetail />} />
    </ReactRouterRoutes>
  );
};
export default Routes;
