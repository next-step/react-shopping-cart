import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constants/page";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";

export default function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path={ROUTE_PATH.PRODUCT_LIST}
            element={<ProductList />}
          />
          <Route exact path={ROUTE_PATH.CART} element={<Cart />} />
          <Route exact path={ROUTE_PATH.ORDER_LIST} element={<OrderList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
