import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import "../src/css/reset.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
