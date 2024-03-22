import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import postCartItemApi from 'src/entities/cart/api/postCartItem.api';

export default function usePostCartItemMutation() {
	const queryClient = useQueryClient();

	return useMutation<Response<object>, unknown, Pick<CartItemData, 'product'>>({
		mutationFn: postCartItemApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cartItemList'] });
		},
	});
}
