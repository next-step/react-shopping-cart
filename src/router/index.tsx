import ProductListPage from "page/list";
import Home from "page/home";

import { createBrowserRouter } from "react-router-dom";
import CartPage from "page/cart";

export const ROUTE = {
  HOME: "/",
  PRODUCT_LIST: "/list",
  CART_LIST: "/cart",
};

const router = createBrowserRouter([
  { path: ROUTE.HOME, element: <Home /> },
  {
    path: ROUTE.PRODUCT_LIST,
    element: <ProductListPage />,
  },
  {
    path: ROUTE.CART_LIST,
    element: <CartPage />,
  },
]);

export default router;