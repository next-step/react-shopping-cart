import { Route, Routes } from 'react-router-dom';
import Layout from './components/frame/Layout';
import ROUTE from './routes/route';
import List from './pages/List';
import Cart from './pages/Cart';
import OrderList from './pages/OrderList';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<List />} />
        <Route path={ROUTE.CART} element={<Cart />} />
        <Route path={ROUTE.ORDER_LIST} element={<OrderList />} />
      </Route>
    </Routes>
  );
}

export default App;
