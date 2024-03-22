import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';

export interface DeleteCartItemListApiParams {
	ids: CartItemData['id'][];
}

export const deleteCartItemListMockHandler = http.put<never, DeleteCartItemListApiParams>(
	'*/carts',
	async ({ request }) => {
		const { ids } = await request.json();

		ids.forEach(id => {
			const targetIndex = MOCK_CART_LIST.findIndex(item => item.id === id);

			if (targetIndex !== -1) {
				MOCK_CART_LIST.splice(targetIndex, 1);
			}
		});

		return HttpResponse.json({ response: {} });
	},
);

export default async function deleteCartItemListApi({ ids }: DeleteCartItemListApiParams) {
	const response = await axiosInstance.put<Response<object>>(`/carts`, { ids });

	return response.data;
}
