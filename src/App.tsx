import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';
import ContentLayout from './components/Layout/ContentsLayout';

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
    <>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </>
  );
}

export default App;
