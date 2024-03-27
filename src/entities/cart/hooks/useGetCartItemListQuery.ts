import { useQuery } from '@tanstack/react-query';

import { CartItemData } from 'src/entities/cart/type/cart.type';
import { Response } from 'src/shared/types/api';
import getCartItemListApi from 'src/entities/cart/api/getCartItemList.api';
import useCartStore from 'src/entities/cart/store/useCartStore';

export default function useGetCartItemListQuery() {
	const setItemsToCart = useCartStore.use.setItemsToCart();

	return useQuery<Response<CartItemData[]>, unknown, CartItemData[]>({
		queryKey: ['cartItemList'],
		queryFn: async () => {
			const response = await getCartItemListApi();

			setItemsToCart(response.response);

			return response;
		},
		select: data => data.response,
	});
}
