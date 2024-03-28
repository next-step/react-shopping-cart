import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import deleteCartItemApi from 'src/entities/cart/api/deleteCartItem.api';
import { cartListOptions } from 'src/entities/cart/hooks/useGetCartItemListQuery';

export default function useDeleteCartItemMutation() {
	const queryClient = useQueryClient();

	return useMutation<
		Response<object>,
		unknown,
		Pick<CartItemData, 'id'>,
		{ previousCartItems?: Response<CartItemData[]> }
	>({
		mutationFn: deleteCartItemApi,
		onMutate: async variables => {
			await queryClient.cancelQueries(cartListOptions);

			const previousCartItems = queryClient.getQueryData(cartListOptions.queryKey);

			if (previousCartItems) {
				queryClient.setQueryData(cartListOptions.queryKey, {
					response: previousCartItems.response.filter(item => item.id !== variables.id),
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
