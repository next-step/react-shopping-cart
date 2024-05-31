import { useMutation, useQueryClient } from '@tanstack/react-query';
import fetcher from '../../../lib/axios';
import { Cart } from '../../../types';
import { cartItemQueryOptions } from '../-queryOptions';

export const useDeleteSelectedItems = () => {
  const queryClient = useQueryClient();

  return useMutation<Cart[], Error, number[], { previousCartItems?: Cart[] }>({
    mutationFn: async (ids) =>
      await fetcher.delete('/carts', { data: { ids } }),
    onMutate: async (ids) => {
      await queryClient.cancelQueries(cartItemQueryOptions());
      const previousCartItems = queryClient.getQueryData(
        cartItemQueryOptions().queryKey
      );

      if (previousCartItems && previousCartItems.length > 0) {
        queryClient.setQueryData(cartItemQueryOptions().queryKey, [
          ...previousCartItems.filter(
            ({ product }) => !ids.includes(product.id)
          ),
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
    onSettled: () => queryClient.invalidateQueries(cartItemQueryOptions()),
  });
};
