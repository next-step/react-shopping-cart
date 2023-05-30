import productService from '@/domain/product/services/product';

import useFetch from '@/hooks/useFetch';

import { ProductsDto } from '@/types/product';

export default function useProducts() {
  return useFetch<ProductsDto>(productService.getProducts);
}
