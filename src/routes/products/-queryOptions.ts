import { queryOptions } from '@tanstack/react-query';
import fetcher from '../../lib/axios';
import { Product } from '../../types';

export const productQueryOptions = (productId: number) =>
  queryOptions({
    queryKey: ['products', productId],
    queryFn: async () => {
      const { data } = await fetcher.get<Product>(`/products/${productId}`);
      return data;
    },
  });
