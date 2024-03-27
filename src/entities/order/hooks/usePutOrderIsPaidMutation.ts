import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Order } from 'src/entities/order/types/order.type';
import { Response } from 'src/shared/types/api';
import putOrderIsPaidApi from 'src/entities/order/api/putOrderIsPaid.api';

interface UsePutOrderIsPaidMutationOptions {
	onSuccess?: (order: Order) => void;
}

export default function usePutOrderIsPaidMutation(options?: UsePutOrderIsPaidMutationOptions) {
	const queryClient = useQueryClient();

	return useMutation<Response<Order>, unknown, Pick<Order, 'id'>>({
		mutationFn: putOrderIsPaidApi,
		onSuccess: data => {
			options?.onSuccess?.(data.response);

			queryClient.invalidateQueries({ queryKey: ['orderList'] });
			queryClient.invalidateQueries({ queryKey: ['orderDetail', { id: data.response.id }] });
			queryClient.invalidateQueries({ queryKey: ['cartItemList'] });
		},
	});
}
