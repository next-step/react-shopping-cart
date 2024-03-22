import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import deleteCartItemApi from 'src/entities/cart/api/deleteCartItem.api';

export default function useDeleteCartItemMutation() {
	const queryClient = useQueryClient();

	return useMutation<Response<object>, unknown, Pick<CartItemData, 'id'>>({
		mutationFn: deleteCartItemApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cartItemList'] });
		},
	});
}
