import productService from '@/domain/product/services/product';

import useFetch from '@/hooks/useFetch';

import { TProductsDto } from '@/types/product';

export default function useProducts() {
  return useFetch<TProductsDto>(productService.getProducts);
}
