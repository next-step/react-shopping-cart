import React from "react";
import App from "./App";
import { Cart, Products, Checkout, Orders } from "./pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<Orders />} />
      <Route path="/" element={<Products />} />
    </Route>,
  ),
);

export default router;
