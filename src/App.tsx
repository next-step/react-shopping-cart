import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <Header />
          {children}
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
