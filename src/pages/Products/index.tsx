import { Suspense } from 'react';
import Product from '@/components/product';

const Products = () => {
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <Product />
    </Suspense>
  );
};

export default Products;
