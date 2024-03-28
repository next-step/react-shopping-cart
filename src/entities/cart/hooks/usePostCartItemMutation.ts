import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import postCartItemApi from 'src/entities/cart/api/postCartItem.api';

import { cartListOptions } from 'src/entities/cart/hooks/useGetCartItemListQuery';

interface UsePostCartItemMutationOptions {
	onMutate?: (variables: Pick<CartItemData, 'product'>) => void;
}

export default function usePostCartItemMutation(options?: UsePostCartItemMutationOptions) {
	const queryClient = useQueryClient();

	return useMutation<
		Response<object>,
		unknown,
		Pick<CartItemData, 'product'>,
		{ previousCartItems?: Response<CartItemData[]> }
	>({
		mutationFn: postCartItemApi,
		onMutate: async variables => {
			options?.onMutate?.(variables);

			await queryClient.cancelQueries(cartListOptions);

			const previousCartItems = queryClient.getQueryData(cartListOptions.queryKey);

			if (previousCartItems) {
				queryClient.setQueryData(cartListOptions.queryKey, {
					response: [
						...previousCartItems.response,
						{
							id: '',
							product: variables.product,
						},
					],
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
