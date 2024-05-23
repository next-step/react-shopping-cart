import Layout from "./components/Layout";

import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrderPayListPage from "./pages/OrderPayListPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProductListPage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/order-pay", element: <OrderPayListPage /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/orders/:id{", element: <OrderDetailPage /> },
    ],
  },
];

export default routes;
