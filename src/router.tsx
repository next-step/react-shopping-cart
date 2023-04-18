import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Products } from "./pages/Products";
import App from "./App";
import { Cart } from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Products />
      </App>
    ),
  },
  {
    path: "/cart",
    element: (
      <App>
        <Cart />
      </App>
    ),
  },
  {
    path: "/orders",
    element: (
      <App>
        <div>주문 목록</div>
      </App>
    ),
  },
]);

export default router;
