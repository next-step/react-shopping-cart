import ProductListPage from "page/product/list";
import Home from "page/home";

import { createBrowserRouter } from "react-router-dom";
import CartPage from "page/cart";
import Detail from "page/product/detail";
import OrdeList from "page/order/list";

export const ROUTE = {
  HOME: "/",
  PRODUCT_LIST: "/list",
  PRODUCT_DETAIL: "/list/:id",
  CART_LIST: "/cart",
  ORDER: "/order",
  ORDER_LIST: "/orderList",
  ORDER_DETAIL: "/orderDetail",
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
  {
    path: ROUTE.PRODUCT_DETAIL,
    element: <Detail />,
  },
  {
    path: ROUTE.ORDER,
  },
  {
    path: ROUTE.ORDER_LIST,
    element: <OrdeList />
  },
]);

export default router;
