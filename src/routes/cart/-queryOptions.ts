import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';
import fetcher from '../../lib/axios';
import { Cart, cartSchema } from '../../types';

export const cartItemQueryOptions = () =>
  queryOptions({
    queryKey: ['carts'],
    queryFn: async () => {
      const { data } = await fetcher.get<Cart[]>('/carts');
      return z.array(cartSchema).parse(data);
    },
    initialData: [],
  });
