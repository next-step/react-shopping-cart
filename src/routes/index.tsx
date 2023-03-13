import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "@/layouts";

export const DOMAINS = {
  MAIN: "/products",
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
        element: <div>TEST</div>,
      },
    ],
  },
]);
