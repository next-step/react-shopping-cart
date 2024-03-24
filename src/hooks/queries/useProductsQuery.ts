import getProducts from '@/apis/getProducts';
import { Product } from '@/models/product.model';
import { useSuspenseQuery } from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'products';

export default function useProductsQuery() {
  return useSuspenseQuery<Product[]>({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  });
}
