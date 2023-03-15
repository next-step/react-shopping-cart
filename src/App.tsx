import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  console.log(data);

  return <div>HelloWorld!!</div>;
}

export default App;
