import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, AppLayout, ContentsLayout } from './components';
import useFetch from './hooks/useFetch';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const { state } = useFetch('/products');
  console.log(state);

  useEffect(() => {
    axios.get('http://localhost:3000/products').then(res => console.log(res));
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
