import { RouterProvider } from "react-router-dom";
import router from "./router";

import "../src/style/reset.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
