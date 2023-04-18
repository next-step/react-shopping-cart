import React from "react";
import { Header } from "./components";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Header />
      {children}
      {/* <footer>&copy; Corp 2023 Nextstep</footer> */}
    </div>
  );
}

export default App;
