import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';

export const deleteCartItemMockHandler = http.delete('*/carts/:id', ({ params }) => {
	const id = params.id as string;

	const targetIndex = MOCK_CART_LIST.findIndex(item => item.id === id);

	if (targetIndex === -1) {
		return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
	}

	MOCK_CART_LIST.splice(targetIndex, 1);

	return HttpResponse.json({ response: {} });
});

export default async function deleteCartItemApi({ id }: Pick<CartItemData, 'id'>) {
	const response = await axiosInstance.delete<Response<object>>(`/carts/${id}`);

	return response.data;
}
