import { Order } from 'src/entities/order/types/order.type';

export const MOCK_ORDER_LIST: Order[] = [];

export const clearMockOrderList = () => {
	MOCK_ORDER_LIST.splice(0, MOCK_ORDER_LIST.length);
};
