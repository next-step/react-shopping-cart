import { Routes, Route } from 'react-router-dom';
import { URL } from '../constants/url';
import ProductDetail from './pages/ProductDetail';
import CartList from './pages/CartList';
import NotFound from './pages/NotFound';
import OrderList from './pages/OrderList';
import PaymentList from './pages/PaymentList';
import ProductList from './pages/ProductList';

const Router = () => {
  return (
    <Routes>
      <Route path={URL.HOME} element={<ProductList />} />
      <Route path={URL.PRODUCT} element={<ProductDetail />} />
      <Route path={URL.CART} element={<CartList />} />
      <Route path={URL.ORDER} element={<OrderList />} />
      <Route path={URL.PAYMENT} element={<PaymentList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
