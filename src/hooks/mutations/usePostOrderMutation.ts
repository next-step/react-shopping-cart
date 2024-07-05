import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postOrder } from '@/apis/Order/postOrder';
import { ORDER_QUERY_KEYS } from '@/constants/queryKey';

type UsePostOrderMutationProps = {
  onMutate?: () => void;
};

export const usePostOrderMutation = ({
  onMutate,
}: UsePostOrderMutationProps = {}) => {
  const queryClient = useQueryClient();

  const postOrderMutation = useMutation({
    mutationFn: postOrder,

    onMutate: async (order) => {
      await queryClient.cancelQueries({ queryKey: ORDER_QUERY_KEYS.LISTS() });

      queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), order);

      onMutate?.();
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), context);
      }
    },
  });

  return postOrderMutation;
};
