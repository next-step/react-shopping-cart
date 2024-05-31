import { useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import fetcher from '../../../lib/axios';
import { PaginatedProduct, paginatedProductSchema } from '../../../types';
import { useWindowSize } from '../../../hooks';

const calculateLanes = (width: number) => {
  if (width > 1280) return 4;
  if (width > 1024) return 3;
  if (width > 768) return 2;
  if (width > 576) return 1;
};

export const useProductList = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: async ({ pageParam }) => {
        const { data } = await fetcher.get<PaginatedProduct>(
          '/products?size=40&page=' + pageParam
        );

        return paginatedProductSchema.parse(data);
      },
      initialPageParam: 0,
      getNextPageParam: ({ isLastPage }, allPages) => {
        if (isLastPage) return;
        return allPages.length;
      },
    });

  const allItems = data ? data.pages.flatMap(({ items }) => items) : [];

  const virtualizer = useWindowVirtualizer({
    count: hasNextPage ? allItems.length + 1 : allItems.length,
    estimateSize: () => 340,
    overscan: 7,
    lanes: calculateLanes(width),
    scrollMargin: ref.current?.offsetTop ?? 0,
  });

  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) return;

    if (
      lastItem.index >= allItems.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allItems.length,
    isFetchingNextPage,
    virtualizer.getVirtualItems(),
  ]);

  useEffect(() => {
    virtualizer.measure();
  }, [virtualizer, width]);

  return {
    ref,
    virtualizer,
    allItems,
  };
};
