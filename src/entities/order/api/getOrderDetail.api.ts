import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';

export const getOrderDetailMockHandler = http.get('*/orders/:id', ({ params }) => {
	const orderId = params.id as string;

	const order = MOCK_ORDER_LIST.find(order => order.id === orderId);

	if (!order) {
		return new HttpResponse(null, { status: 404 });
	}

	return HttpResponse.json({ response: order });
});

export default async function getOrderDetailApi({ id }: Pick<Order, 'id'>) {
	const response = await axiosInstance.get<Response<Order>>(`/orders/${id}`);

	return response.data;
}
