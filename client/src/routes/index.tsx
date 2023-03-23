import styled from 'styled-components';
import { Route, Routes as ReactRouterRoutes, createBrowserRouter } from 'react-router-dom';
import { Cart, Order, OrderList, OrderListDetail, ProductDetail, ProductList } from 'pages';

// export const ROUTE_URL = {
//   PRODUCT_LIST: '/products',
//   PRODUCT_DETAIL: '/product/:id',
//   CART_LIST: '/carts',
//   ORDER_LIST: '/orders',
//   ORDER_DETAIL: '/order/:id',
//   ORDER: '/order',
// } as const;

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: ROUTE_URL.PRODUCT_LIST, element: <ProductList /> },
//       { path: ROUTE_URL.ORDER, element: <Order /> },
//       { path: ROUTE_URL.CART_LIST, element: <Cart /> },
//       { path: ROUTE_URL.ORDER_DETAIL, element: <OrderListDetail /> },
//     ],
//   },
// ]);

const Layout = styled.div`
  padding: 24px 300px;
`;

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
