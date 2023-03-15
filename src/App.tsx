import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { ROUTE } from './constant/router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderList from './pages/OrderList';
import Detail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.CART} element={<Cart />} />
        <Route path={ROUTE.ORDER_LIST} element={<OrderList />} />
        <Route path={ROUTE.DETAIL + '/:id'} element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
