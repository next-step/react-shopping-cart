import { Route, Routes } from 'react-router-dom';
import Layout from './components/frame/Layout';
import ROUTE from './routes/route';
import List from './pages/List';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.LIST} element={<Layout />}>
        <Route index element={<List />} />
      </Route>
    </Routes>
  );
}

export default App;
