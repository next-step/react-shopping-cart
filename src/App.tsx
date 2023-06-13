import React, { PropsWithChildren } from "react";
import { Header } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          {children}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
