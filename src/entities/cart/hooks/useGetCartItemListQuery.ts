import { queryOptions, useQuery } from '@tanstack/react-query';

import { CartItemData } from 'src/entities/cart/type/cart.type';
import { Response } from 'src/shared/types/api';
import getCartItemListApi from 'src/entities/cart/api/getCartItemList.api';
import useCartStore from 'src/entities/cart/store/useCartStore';

export const cartListOptions = queryOptions<Response<CartItemData[]>, unknown, CartItemData[]>({
	queryKey: ['cartItemList'],
	queryFn: async () => {
		const result = await getCartItemListApi();

		useCartStore.getState().setItemsToCart(result.response);

		return result;
	},
	select: data => data.response,
});

export default function useGetCartItemListQuery() {
	return useQuery(cartListOptions);
}
