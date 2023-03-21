import React, { useEffect, useState } from 'react';

import { getProducts } from '@/apis';
import { LayeredWrapper } from '@/components/LayeredWrapper/LayeredWrapper';
import { ProductModel } from '@/models';

import { ProductListInnerStyle, ProductListOuterStyle } from './ProductList.styled';
import { Product } from './Product';

export function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    getProducts().then((products) => setProducts(products.map((productPOJO) => new ProductModel(productPOJO))));
  }, []);

  return (
    <LayeredWrapper outer={{ className: ProductListOuterStyle() }} inner={{ className: ProductListInnerStyle() }}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </LayeredWrapper>
  );
}
