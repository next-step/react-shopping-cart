import ProductListPage from "page/list";
import Home from "page/home";

import { createBrowserRouter } from "react-router-dom";

export const ROUTE = {
  HOME: "/",
  PRODUCT_LIST: "/list",
};

const router = createBrowserRouter([
  { path: ROUTE.HOME, element: <Home /> },
  {
    path: ROUTE.PRODUCT_LIST,
    element: <ProductListPage />,
  },
]);

export default router;