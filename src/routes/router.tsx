import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { PayssionProvider } from "payssion";
import OrderDetailPage from "../pages/OrderDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PayssionProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PayssionProvider>
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
      { path: "order", element: <OrderPage /> },
      { path: "order/complete", element: <OrderDetailPage /> },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);
