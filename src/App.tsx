import React, { PropsWithChildren } from "react";
import { Header } from "./components";
import { CartContextProvider } from "./context/CartContext/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <div className="App">
          <Header />
          {children}
        </div>
      </CartContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
