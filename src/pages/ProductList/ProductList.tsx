import React, { Suspense } from 'react';

import { getProducts } from '@/apis';
import { LayeredWrapper, CartLoader } from '@/components';
import { useSuspenseFetch, useIntersectionObserver } from '@/hooks';
import { ProductModel } from '@/models';

import { Product } from './Product';
import {
  ProductListInnerStyle,
  ProductListOuterStyle,
  StyledProductListLoader,
  StyledProductListWrapper,
  StyledBottomBuffer,
} from './ProductList.styled';

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
  // TODO: react-query와 연결하기
  const products = useSuspenseFetch('/products', getProducts) as unknown as ProductModel[];

  // TODO: Suspense 아래 scroll Restore를 둬서 loading이 끝나면 scroll이 복구되도록 하기

  const intersectRef = useIntersectionObserver<HTMLDivElement>((e, o) => console.log(e, o), { threshold: 0.6 });

  return (
    <StyledProductListWrapper>
      <LayeredWrapper outer={{ className: ProductListOuterStyle() }} inner={{ className: ProductListInnerStyle() }}>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </LayeredWrapper>
      {products && <StyledBottomBuffer ref={intersectRef} />}
    </StyledProductListWrapper>
  );
}
