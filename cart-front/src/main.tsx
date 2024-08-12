import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

export const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@tanstack/react-router" {
  interface RouteContext {
    queryClient: QueryClient;
  }
}

async function enableMocking() {
  /*
  if (process.env.NODE_ENV !== "development") {
    return;
  }
*/
  const { worker } = await import("./Mocks/browser.ts");

  return worker.start();
}

enableMocking().then(() => {
  const rootElement = document.getElementById("root")!;
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    );
  }
});
