import { ProductList } from '@/types';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@/api/fetcher';
import { useEffect, useMemo } from 'react';
import useScrollBottom from './useScrollBottom';

const getKey = (pageIndex: number) => {
  return `/products?page=${pageIndex}&size=16`;
};

function useProductList() {
  const {
    data: productList,
    error,
    size,
    setSize,
  } = useSWRInfinite<{ ok: boolean; data: ProductList; totalPage: number }>(getKey, fetcher, { suspense: true });

  const products = productList ? productList.map(product => product.data).flat() : [];
  const lastPage = useMemo(() => (productList ? productList[0].totalPage : 0), []);
  const isLast = useMemo(() => size === lastPage, [products.length]);

  const { isBottom } = useScrollBottom();

  useEffect(() => {
    if (isBottom && !isLast) {
      setSize(p => p + 1);
    }
  }, [isBottom]);

  return {
    products,
    error,
    size,
    setSize,
    hasMoreData: !isLast,
  };
}

export default useProductList;
