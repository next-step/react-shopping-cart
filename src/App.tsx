import React from "react";
import CartPage from "./page/cart";
import Header from "./components/header/header";
import "../src/css/reset.css";
function App() {
  return (
    <div>
      <Header></Header>
      <CartPage></CartPage>
    </div>
  );
}

export default App;
