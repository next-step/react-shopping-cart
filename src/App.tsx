import { useEffect, useState } from 'react';
import RootRouter from './RootRouter';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/products', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  return <RootRouter />;
}

export default App;
