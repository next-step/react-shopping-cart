import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postOrderProducts } from '@/apis/Order/postOrderProducts';
import { CART_QUERY_KEYS, ORDER_QUERY_KEYS } from '@/constants/queryKey';

interface UsePostOrderProductsMutationProps {
  onMutate?: () => void;
}

export const usePostOrderProductsMutation = ({
  onMutate,
}: UsePostOrderProductsMutationProps) => {
  const queryClient = useQueryClient();

  const postOrderProductsMutation = useMutation({
    mutationFn: postOrderProducts,

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ORDER_QUERY_KEYS.LISTS() });

      const prevOrder =
        queryClient.getQueryData(ORDER_QUERY_KEYS.LISTS()) || [];

      if (prevOrder) {
        onMutate?.();
      }

      return { prevOrder };
    },

    onError: (_, __, context) => {
      if (context?.prevOrder) {
        queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), context);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEYS.LISTS() });
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEYS.LISTS() });
    },
  });

  return postOrderProductsMutation;
};
