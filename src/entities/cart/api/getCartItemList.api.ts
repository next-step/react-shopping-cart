import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { CartItemData } from 'src/entities/cart/type/cart.type';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';

export const getCartItemListMockHandler = http.get('*/carts', () => {
	return HttpResponse.json({ response: MOCK_CART_LIST });
});

export default async function getCartItemListApi() {
	const response = await axiosInstance.get<Response<CartItemData[]>>('/carts');

	return response.data;
}
