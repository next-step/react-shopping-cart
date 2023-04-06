import React, { Suspense } from 'react';

import { LayeredWrapper, CartLoader } from '@/components';
import { useIntersectionObserver } from '@/hooks';

import { useGetProductList } from './queries';
import { Product } from './Product';
import {
  ProductListInnerStyle,
  ProductListOuterStyle,
  StyledProductListLoader,
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
  // TODO: Suspense 아래 scroll Restore를 둬서 loading이 끝나면 scroll이 복구되도록 하기

  const { products, hasNextPage, fetchNextPage } = useGetProductList();

  const intersectRef = useIntersectionObserver<HTMLDivElement>(() => hasNextPage && fetchNextPage(), {
    threshold: 0.6,
  });

  return (
    <>
      <LayeredWrapper outer={{ className: ProductListOuterStyle() }} inner={{ className: ProductListInnerStyle() }}>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </LayeredWrapper>
      {/* TODO: isFetching중이라는 것을 받아서 loading 상태로 변환해주는 거 만들기 */}
      {products && <StyledBottomBuffer ref={intersectRef} />}
    </>
  );
}
