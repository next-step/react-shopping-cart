import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../Apis/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Product } from "../../Types/types";
export const ProductInfiniteScroll = (): [
  (node?: Element | null) => void,
  Product[],
  boolean,
] => {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["infiniteProducts"],
    staleTime: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getProducts({ page: pageParam, limit: 16 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return 1;
      }
      return lastPageParam + 1;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const products = data ? data.pages.flat() : [];
  return [ref, products, isLoading];
};
