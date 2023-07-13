import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
