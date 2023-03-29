import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';

import Carts from '@/pages/Carts';
import Orders from '@/pages/Orders';
import Payment from '@/pages/Payment';
import Products from '@/pages/Products';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Navigate replace to="/products" />} />
    </ReactRouters>
  );
};

export default Routes;
