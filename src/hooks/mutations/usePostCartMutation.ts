import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCart } from '@/apis/Cart/postCart';
import { CART_QUERY_KEYS } from '@/constants/queryKey';
import { CartProduct } from '@/types/cart';

type UsePostCartMutationProps = {
  onMutate?: () => void;
};

export const usePostCartMutation = ({
  onMutate,
}: UsePostCartMutationProps = {}) => {
  const queryClient = useQueryClient();

  const postCartMutation = useMutation({
    mutationFn: postCart,
    onMutate: async (cart) => {
      await queryClient.cancelQueries({ queryKey: CART_QUERY_KEYS.LISTS() });
      const previousCart = queryClient.getQueryData<CartProduct[]>(
        CART_QUERY_KEYS.LISTS() || []
      );

      if (previousCart) {
        queryClient.setQueryData(CART_QUERY_KEYS.LISTS(), [
          ...previousCart,
          ...cart,
        ]);
        onMutate?.();
      }

      return { previousCart };
    },

    onError: (_, __, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(CART_QUERY_KEYS.LISTS(), context);
      }
    },

    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEYS.LISTS(), newCart);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEYS.LISTS() });
    },
  });

  return postCartMutation;
};
