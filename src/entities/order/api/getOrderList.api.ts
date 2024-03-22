import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import { MOCK_ORDER_LIST } from 'src/entities/order/mock/MOCK_ORDER_LIST';

export const getOrderListMockHandler = http.get('*/orders', () => {
	return HttpResponse.json({ response: MOCK_ORDER_LIST });
});

export default async function getOrderListApi() {
	const response = await axiosInstance.get<Response<Order[]>>('/orders');
	return response.data;
}
