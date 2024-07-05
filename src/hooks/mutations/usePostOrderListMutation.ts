import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postOrderList } from '@/apis/Order/postOrderList';
import { ORDER_QUERY_KEYS } from '@/constants/queryKey';
import { Order } from '@/types/order';

type UsePostOrderListMutationProps = {
  onMutate?: () => void;
};

export const usePostOrderListMutation = ({
  onMutate,
}: UsePostOrderListMutationProps = {}) => {
  const queryClient = useQueryClient();

  const postOrderListMutation = useMutation({
    mutationFn: postOrderList,
    onMutate: async (order) => {
      await queryClient.cancelQueries({ queryKey: ORDER_QUERY_KEYS.LISTS() });
      const previousOrder = queryClient.getQueryData<Order[]>(
        ORDER_QUERY_KEYS.LISTS() || []
      );

      if (previousOrder) {
        queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), [
          ...previousOrder,
          ...order,
        ]);
        onMutate?.();
      }

      return { previousOrder };
    },

    onError: (_, __, context) => {
      if (context?.previousOrder) {
        queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), context);
      }
    },

    onSuccess: (newOrder) => {
      queryClient.setQueryData(ORDER_QUERY_KEYS.LISTS(), newOrder);
    },
  });

  return postOrderListMutation;
};
