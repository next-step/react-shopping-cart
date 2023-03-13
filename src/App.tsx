import React from "react";
import { RouterProvider } from "react-router-dom";

import browserRouter from "@/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
