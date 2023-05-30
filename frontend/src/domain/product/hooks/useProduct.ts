import { useCallback } from 'react';

import productService from '@/domain/product/services/product';

import useFetch from '@/hooks/useFetch';

import { TProduct } from '@/types/product';

export default function useProduct(id: number) {
  const fetchFunc = useCallback(() => productService.getProductById(id), [id]);

  return useFetch<TProduct>(fetchFunc);
}
