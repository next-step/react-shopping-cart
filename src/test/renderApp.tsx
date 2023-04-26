import { ROUTE_URL } from 'common/routes';
import { Route, Routes } from 'react-router-dom';
import { ProductListPage, PrdouctDetailPage, CartPage } from 'domain/pages';
import { NavBar } from 'common/components';

export const renderAppPage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path={ROUTE_URL.PRODUCT_LIST} element={<ProductListPage />} index={true} />
        <Route path={ROUTE_URL.PRODUCT_DETAIL} element={<PrdouctDetailPage />} />
        <Route path={ROUTE_URL.CART_LIST} element={<CartPage />} />
      </Routes>
    </div>
  );
};
