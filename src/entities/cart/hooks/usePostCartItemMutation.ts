import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { CartItem } from 'src/entities/cart/type/cart.type';
import postCartItemApi from 'src/entities/cart/api/postCartItem.api';

export default function usePostCartItemMutation() {
	const queryClient = useQueryClient();

	return useMutation<Response<object>, unknown, Pick<CartItem, 'product'>>({
		mutationFn: postCartItemApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cartItemList'] });
		},
	});
}
