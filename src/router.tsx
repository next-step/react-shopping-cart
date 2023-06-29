import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Products } from "./pages/Products";
import App from "./App";
import { Cart } from "./pages/Cart";
import { Orders } from "./pages/Orders";
import { Checkout } from "./pages/Checkout";

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
        <Orders />
      </App>
    ),
  },
  {
    path: "/checkout",
    element: (
      <App>
        <Checkout />
      </App>
    ),
  },
]);

export default router;
