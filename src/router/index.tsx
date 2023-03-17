import ProductListPage from "page/list";
import Home from "page/home";

import { createBrowserRouter } from "react-router-dom";
import CartPage from "page/cart";

export const ROUTE = {
  HOME: "/",
  PRODUCT_LIST: "/list",
  PRODUCT_DETAIL: "/list/:id",
  CART_LIST: "/cart",
  ORDER:"/order",
  ORDER_LIST:"/orderList",
  ORDER_DETAIL:"/orderDetail",
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