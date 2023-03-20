import React, { useEffect, useState } from 'react';

import { getProducts } from '@/apis';
import { Header } from '@/components';
import { ProductModel } from '@/models';

import { StyledProductList, StyledProductsContainer } from './ProductList.styled';
import { Product } from './Product';

export function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    getProducts().then((products) => setProducts(products.map((productPOJO) => new ProductModel(productPOJO))));
  }, []);

  return (
    <>
      <Header />
      <StyledProductList>
        <StyledProductsContainer>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </StyledProductsContainer>
      </StyledProductList>
    </>
  );
}
