import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';

export const postOrderMockHandler = http.post<never, Omit<Order, 'id'>>('*/orders', async ({ request }) => {
	const { orderDetails } = await request.json();

	const newOrder = {
		id: (MOCK_ORDER_LIST.length + 1).toString(),
		orderDetails,
		isPaid: false,
	};

	MOCK_ORDER_LIST.push(newOrder);

	return HttpResponse.json({ response: newOrder });
});

export default async function postOrderApi({ orderDetails }: Omit<Order, 'id' | 'isPaid'>) {
	const response = await axiosInstance.post<Response<Order>>('/orders', { orderDetails });

	return response.data;
}
