import React from "react";
import { Header } from "./components";
import { CartContextProvider } from "./context/CartContext/CartContext";

function App({ children }: { children: React.ReactNode }) {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        {children}
        {/* <footer>&copy; Corp 2023 Nextstep</footer> */}
      </div>
    </CartContextProvider>
  );
}

export default App;
