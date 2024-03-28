import { useQuery } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import getOrderListApi from 'src/entities/order/api/getOrderList.api';

export default function useGetOrderListQuery() {
	return useQuery<Response<Order[]>, unknown, Order[]>({
		queryKey: ['orderList'],
		queryFn: getOrderListApi,
		select: data => data.response,
	});
}
