import React, { Suspense } from 'react';

import { getProducts } from '@/apis';
import { LayeredWrapper, CartLoader } from '@/components';
import { useSuspenseFetch } from '@/hooks';
import { ProductModel } from '@/models';

import { Product } from './Product';
import { ProductListInnerStyle, ProductListOuterStyle, StyledProductListLoader } from './ProductList.styled';

export function ProductList() {
  return (
    <Suspense
      fallback={
        <StyledProductListLoader>
          <CartLoader />
        </StyledProductListLoader>
      }
    >
      <ProductListContent />
    </Suspense>
  );
}

function ProductListContent() {
  const products = useSuspenseFetch('/products', getProducts) as unknown as ProductModel[];

  return (
    <LayeredWrapper outer={{ className: ProductListOuterStyle() }} inner={{ className: ProductListInnerStyle() }}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </LayeredWrapper>
  );
}
