import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetcher from '../../../lib/axios';
import { Cart, Product } from '../../../types';
import { cartItemQueryOptions } from '../../cart/-queryOptions';

export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Cart[], Error, Product, { previousCartItems?: Cart[] }>({
    mutationFn: async (product: Product) => {
      const { data } = await fetcher.post('/carts', { product });
      return data;
    },
    onMutate: async (product) => {
      await queryClient.cancelQueries(cartItemQueryOptions());
      const previousCartItems = queryClient.getQueryData(
        cartItemQueryOptions().queryKey
      );

      if (previousCartItems) {
        queryClient.setQueryData(cartItemQueryOptions().queryKey, [
          ...previousCartItems,
          { id: new Date().getTime(), product },
        ]);
      }

      return { previousCartItems };
    },
    onError: (_, __, context) => {
      if (context?.previousCartItems) {
        queryClient.setQueryData(
          cartItemQueryOptions().queryKey,
          context.previousCartItems
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(cartItemQueryOptions());
    },
  });
};
