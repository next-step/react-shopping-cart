import { useQuery } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import { Order } from 'src/entities/order/types/order.type';
import getOrderDetailApi from 'src/entities/order/api/getOrderDetail.api';

export default function useGetOrderDetailQuery({ id }: Pick<Order, 'id'>) {
	return useQuery<Response<Order>, unknown, Order>({
		queryKey: ['orderDetail', { id }],
		queryFn: () => getOrderDetailApi({ id }),
		select: data => data.response,
	});
}
