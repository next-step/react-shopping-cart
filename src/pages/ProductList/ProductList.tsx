import React, { Suspense } from 'react';

import { LayeredWrapper, CartLoader, Loader } from '@/components';
import { useIntersectionObserver } from '@/hooks';

import { useGetProductList } from './queries';
import { Product } from './Product';
import {
  ProductListInnerStyle,
  ProductListOuterStyle,
  LoaderStyle,
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
  const { products, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetProductList();

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
      <Loader showLoader={isFetchingNextPage} className={LoaderStyle()}>
        <StyledBottomBuffer ref={intersectRef} />
      </Loader>
    </>
  );
}
