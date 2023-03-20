import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

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

  return <Outlet />;
}

export default App;
