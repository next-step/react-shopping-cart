import { useQueryClient, useMutation } from '@tanstack/react-query';
import { cartItemQueryOptions } from '../-queryOptions';
import fetcher from '../../../lib/axios';
import { Cart } from '../../../types';

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Cart[], Error, number, { previousCartItems?: Cart[] }>({
    mutationFn: async (id) => await fetcher.delete(`/carts/${id}`),
    onMutate: async (cartItemId) => {
      await queryClient.cancelQueries(cartItemQueryOptions());
      const previousCartItems = queryClient.getQueryData(
        cartItemQueryOptions().queryKey
      );

      if (previousCartItems && previousCartItems.length > 0) {
        queryClient.setQueryData(cartItemQueryOptions().queryKey, [
          ...previousCartItems.filter(
            ({ product }) => product.id !== cartItemId
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
