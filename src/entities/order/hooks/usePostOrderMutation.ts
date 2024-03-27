import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Order } from 'src/entities/order/types/order.type';
import { Response } from 'src/shared/types/api';
import postOrderApi from 'src/entities/order/api/postOrder.api';

interface UsePostOrderMutationOptions {
	onSuccess?: (order: Order) => void;
}

export default function usePostOrderMutation(options?: UsePostOrderMutationOptions) {
	const queryClient = useQueryClient();

	return useMutation<Response<Order>, unknown, Omit<Order, 'id' | 'isPaid'>>({
		mutationFn: postOrderApi,
		onSuccess: data => {
			options?.onSuccess?.(data.response);

			queryClient.invalidateQueries({ queryKey: ['orderList'] });
		},
	});
}
