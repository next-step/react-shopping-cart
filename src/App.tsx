import React, { PropsWithChildren } from "react";
import { Header } from "./components";
import { RecoilRoot } from "recoil";

function App({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        {children}
      </div>
    </RecoilRoot>
  );
}

export default App;
