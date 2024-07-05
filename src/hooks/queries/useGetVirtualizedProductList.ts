import { useEffect, useMemo, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Virtualizer, useWindowVirtualizer } from '@tanstack/react-virtual';
import { fetchProducts } from '@/apis/Product/getProducts';
import { PRODUCT_QUERY_KEYS } from '@/constants/queryKey';
import { getResponsiveLanes } from '@/utils/responsiveLanes';

const INITIAL_PAGE_PARAM = {
  cursor: 0,
  limit: 8,
};

export const useGetVirtualizedProductList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data: productList,
    isFetching,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: PRODUCT_QUERY_KEYS.LISTS(),
    queryFn: ({ pageParam = INITIAL_PAGE_PARAM }) => fetchProducts(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor
        ? { cursor: lastPage.nextCursor, limit: INITIAL_PAGE_PARAM.limit }
        : null,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousCursor
        ? { cursor: firstPage.previousCursor, limit: INITIAL_PAGE_PARAM.limit }
        : null,
    initialPageParam: INITIAL_PAGE_PARAM,
  });

  const products = useMemo(
    () =>
      productList ? productList.pages.flatMap((pages) => pages.products) : [],
    [productList]
  );

  const virtualizer: Virtualizer<Window, Element> = useWindowVirtualizer({
    count: products.length,
    scrollMargin: 0,
    estimateSize: () => 230,
    overscan: 3,
    lanes: getResponsiveLanes(),
  });

  useEffect(() => {
    const handleScroll = () => {
      const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

      if (
        lastItem &&
        lastItem.index >= products.length - 1 &&
        hasNextPage &&
        !isFetching
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, fetchNextPage, products.length, isFetching, virtualizer]);

  useEffect(() => {
    const handleScroll = () => {
      const [firstItem] = [...virtualizer.getVirtualItems()];

      if (!firstItem) {
        return;
      }

      if (firstItem.index === 0 && hasPreviousPage && !isFetching) {
        fetchPreviousPage();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    hasPreviousPage,
    fetchPreviousPage,
    products.length,
    isFetching,
    virtualizer,
  ]);

  return {
    products,
    containerRef,
    virtualizer,
  };
};
