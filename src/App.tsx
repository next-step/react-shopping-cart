import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(json => console.log(json));
  }, []);
  return <div>Hello</div>;
}

export default App;
