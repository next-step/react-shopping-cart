import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import OrdersPage from "../pages/OrdersPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "",
        element: <ProductsPage />,
      },
      {
        path: "/:id",
        element: <ProductDetailPage />,
      },
      { path: "cart", element: <CartPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);
