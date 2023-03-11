import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "../page/list/list";

export const ROUTE = {
  PRODUCT_LIST: "/",
}

const router = createBrowserRouter([
  {
    path : ROUTE.PRODUCT_LIST,
    element: <ProductListPage />
  }
])

export default router;