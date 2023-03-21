import React, { useEffect, useState } from 'react';

import { getProducts } from '@/apis';
import { ProductModel } from '@/models';

import { ProductListInnerStyle, ProductListOuterStyle } from './ProductList.styled';
import { Product } from './Product';
import { LayeredWrapper } from '@/components/LayeredWrapper/LayeredWrapper';

export function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    getProducts().then((products) => setProducts(products.map((productPOJO) => new ProductModel(productPOJO))));
  }, []);

  return (
    <LayeredWrapper outerClassName={ProductListOuterStyle()} innerClassName={ProductListInnerStyle()}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </LayeredWrapper>
  );
}
