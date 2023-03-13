import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/browser";

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
