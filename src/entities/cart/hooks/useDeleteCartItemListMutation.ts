import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import deleteCartItemListApi, { DeleteCartItemListApiParams } from 'src/entities/cart/api/deleteCartItemList.api';

export default function useDeleteCartItemListMutation() {
	const queryClient = useQueryClient();

	return useMutation<Response<object>, unknown, DeleteCartItemListApiParams>({
		mutationFn: deleteCartItemListApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cartItemList'] });
		},
	});
}
