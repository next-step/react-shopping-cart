import ProductPlaceHolder from '@/components/ProductPlaceHolder.tsx';
import { lazy, Suspense, useState } from 'react';
const Product = lazy(() => import('@/components/product'));

const Products = () => {
  return (
    <Suspense fallback={<ProductPlaceHolder />}>
      <Product />
    </Suspense>
  );
};

export default Products;
