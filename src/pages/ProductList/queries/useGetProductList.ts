import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getProducts } from '@/apis';
import { PRODUCTS_KEY } from '@/constants';

export function useGetProductList() {
  const res = useInfiniteQuery(PRODUCTS_KEY, ({ pageParam }) => getProducts({ page: pageParam }), {
    getNextPageParam: ({ nextPage }) => nextPage,
    suspense: true,
  });
  const products = useMemo(() => res.data?.pages.map(({ products }) => products).flat(), [res.data]);

  return {
    ...res,
    products,
  };
}
