import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
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
        path: "",
        element: <Products />,
      },
      { path: "cart", element: <Cart /> },
      { path: "orders", element: <Orders /> },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);
