import { ordersHandlers } from './orders';
import { productHandlers } from './products';

export const handlers = [...ordersHandlers, ...productHandlers];
