import { Routes, Route } from 'react-router-dom';
import URL from '../constants/url';
import CartList from './pages/CartList';
import NotFound from './pages/NotFound';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';

const Router = () => (
  <Routes>
    <Route path={URL.HOME} element={<ProductList />} />
    <Route path={URL.CART} element={<CartList />} />
    <Route path={URL.ORDER} element={<OrderList />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
