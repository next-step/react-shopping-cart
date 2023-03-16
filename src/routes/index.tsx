import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { CartOrderMainLayout, MainLayout } from "@/layouts";
import { Carts, Products } from "@/views";

export const DOMAINS = {
  MAIN: "/products",
  CART: "/carts",
};

export type Domain = keyof typeof DOMAINS;

export default createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products"></Navigate>,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: DOMAINS.MAIN,
        element: <Products />,
      },
      {
        path: "/",
        element: <CartOrderMainLayout />,
        children: [{ path: DOMAINS.CART, element: <Carts /> }],
      },
    ],
  },
]);
