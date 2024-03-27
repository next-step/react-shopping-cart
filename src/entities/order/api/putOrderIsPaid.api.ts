import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';

export const putOrderIsPaidMockHandler = http.put('*/orders/:id', ({ params }) => {
	const targetOrderId = params.id as string;

	const targetOrderIndex = MOCK_ORDER_LIST.findIndex(order => order.id === targetOrderId);

	if (targetOrderIndex === -1) {
		return new HttpResponse(null, { status: 404 });
	}

	const targetOrder = MOCK_ORDER_LIST[targetOrderIndex];

	MOCK_ORDER_LIST[targetOrderIndex] = { ...targetOrder, isPaid: true };

	MOCK_CART_LIST.splice(0, MOCK_CART_LIST.length);

	return HttpResponse.json({ response: MOCK_ORDER_LIST[targetOrderIndex] });
});

export default async function putOrderIsPaidApi({ id }: Pick<Order, 'id'>) {
	const response = await axiosInstance.put<Response<Order>>(`/orders/${id}`);

	return response.data;
}
