import { ROUTE_URL } from 'routes';
import { Route, Routes } from 'react-router-dom';
import { ProductListPage, PrdouctDetailPage, CartPage } from 'pages';

export const routerWithPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path={ROUTE_URL.PRODUCT_LIST} element={<ProductListPage />} index={true} />
      <Route path={ROUTE_URL.PRODUCT_DETAIL} element={<PrdouctDetailPage />} />
      <Route path={ROUTE_URL.CART_LIST} element={<CartPage />} />
    </Routes>
  );
};
