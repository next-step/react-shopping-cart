import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      { path: "cart", element: <Cart /> },
      { path: "orders", element: <Orders /> },
    ],
  },
]);
