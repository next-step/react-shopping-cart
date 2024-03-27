import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { worker } from "@/mocks/browser";
import type { StartOptions } from "msw/browser";

const workerStartOptions: StartOptions = {
  serviceWorker: {
    url: "/react-shopping-cart/mockServiceWorker.js",
  },
};
worker.start(workerStartOptions);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
