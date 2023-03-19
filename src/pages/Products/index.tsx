import ProductPlaceHolder from '@/components/ProductPlaceHolder.tsx';
import { lazy, Suspense } from 'react';
const Product = lazy(() => import('@/components/Product'));

const Products = () => {
  return (
    <Suspense fallback={<ProductPlaceHolder />}>
      <Product />
    </Suspense>
  );
};

export default Products;
