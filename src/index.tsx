import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    return worker.start();
  }
  return Promise.resolve();
}

prepare().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
