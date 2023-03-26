import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';

import Products from '@/pages/Products';
import Orders from '@/pages/Orders';
import Carts from '@/pages/Carts';
import Payment from '@/pages/Payment';

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
