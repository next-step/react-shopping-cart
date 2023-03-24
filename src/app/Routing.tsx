import { Routes, Route } from 'react-router-dom';
import { URL } from '../constants/url';
import CartList from './pages/CartList';
import NotFound from './pages/NotFound';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import { getJSONData, setJSONData } from '../utils/localStorage';
import { LOCALSTORAGE } from '../constants/dataKey';
import { getAllProducts } from '../api/product';
import { getAllOrders } from '../api/order';
import { getAllCarts } from '../api/cart';

// 음.. 지금.. 약간 얘한테 라우팅 알맞게 랜더하고 데이터도 알잘딱 해서 가져와.. 느낌인데...
const data = {
  product: getJSONData(LOCALSTORAGE.PRODUCT),
  order: getJSONData(LOCALSTORAGE.ORDER),
  cart: getJSONData(LOCALSTORAGE.CART)
};
if (data.product.length === 0) {
  getAllProducts().then((res) => setJSONData(LOCALSTORAGE.PRODUCT, res));
}
if (data.order.length === 0) {
  getAllOrders().then((res) => setJSONData(LOCALSTORAGE.ORDER, res));
}
if (data.cart.length === 0) {
  getAllCarts().then((res) => setJSONData(LOCALSTORAGE.CART, res));
}

const Router = () => (
  <Routes>
    <Route path={URL.HOME} element={<ProductList data={data.product} />} />
    <Route path={URL.CART} element={<CartList data={data.cart} />} />
    <Route path={URL.ORDER} element={<OrderList data={data.order} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
