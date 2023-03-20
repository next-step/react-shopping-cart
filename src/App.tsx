import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/products").then((res) =>
      res.json().then(console.log)
    );
  }, []);

  return <div id="app"></div>;
}

export default App;
