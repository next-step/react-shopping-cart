import { RouterProvider } from "react-router-dom";
import router from "./router";

import "../src/style/reset.css";
import { ProductsProvider } from "store/context/ProductsContext";
import { CartProvider } from "store/context/CartContext";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
