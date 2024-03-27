import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import deleteCartItemListApi, { DeleteCartItemListApiParams } from 'src/entities/cart/api/deleteCartItemList.api';
import { cartListOptions } from 'src/entities/cart/hooks/useGetCartItemListQuery';
import { CartItemData } from 'src/entities/cart/type/cart.type';

export default function useDeleteCartItemListMutation() {
	const queryClient = useQueryClient();

	return useMutation<
		Response<object>,
		unknown,
		DeleteCartItemListApiParams,
		{ previousCartItems?: Response<CartItemData[]> }
	>({
		mutationFn: deleteCartItemListApi,
		onMutate: async variables => {
			await queryClient.cancelQueries(cartListOptions);

			const previousCartItems = queryClient.getQueryData(cartListOptions.queryKey);

			if (previousCartItems) {
				queryClient.setQueryData(cartListOptions.queryKey, {
					response: previousCartItems.response.filter(item => !variables.ids.includes(item.id)),
				});
			}

			return { previousCartItems };
		},
		onError: (_, __, context) => {
			if (context?.previousCartItems) {
				queryClient.setQueryData(cartListOptions.queryKey, context.previousCartItems);
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries(cartListOptions);
		},
	});
}
