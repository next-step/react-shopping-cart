import { Suspense, useState } from 'react';

import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard.tsx';
import ProductPlaceHolder from '../ProductPlaceHolder.tsx';

const Products = () => {
  const [products, setProducts] = useState<Product[]>();

  useOnMounted(() => {
    productApi.getAllProducts().then((data) => setProducts(data));
  });

  return (
    <Suspense fallback={<ProductPlaceHolder />}>
      <div className="grid py-300">{products?.map(ProductCard)}</div>
    </Suspense>
  );
};

export default Products;
