import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import OrderPayListProvider from "./context/OrderPayListProvider";

const queryClient = new QueryClient();

function main() {
  const container = document.getElementById("root");

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <OrderPayListProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </OrderPayListProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

main();
