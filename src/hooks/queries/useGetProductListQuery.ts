import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { fetchProductList } from '@/apis/Product/getProductList';
import { PRODUCT_QUERY_KEYS } from '@/constants/queryKey';

const INITIAL_PAGE_PARAM = {
  limit: 8,
  offset: 0,
};

export const useGetProductListQuery = () => {
  const { ref, inView } = useInView();

  const {
    data: productList,
    isFetching,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: PRODUCT_QUERY_KEYS.LISTS(),
    queryFn: ({ pageParam = INITIAL_PAGE_PARAM }) =>
      fetchProductList(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.next
        ? { offset: lastPage.next, limit: INITIAL_PAGE_PARAM.limit }
        : null,
    initialPageParam: INITIAL_PAGE_PARAM,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetching]);

  const products = useMemo(
    () =>
      productList ? productList.pages.flatMap((pages) => pages.products) : [],
    [productList]
  );

  const loadingInitialData = isLoading && !isFetchingNextPage;
  const shouldDisplaySkeleton = loadingInitialData || isFetchingNextPage;

  return { ref, products, isLoading: shouldDisplaySkeleton };
};
