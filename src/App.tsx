import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, AppLayout, ContentsLayout } from './components';

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

  return (
    <AppLayout>
      <Header />
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
    </AppLayout>
  );
}

export default App;
