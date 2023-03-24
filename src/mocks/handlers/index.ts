import { ordersHandlers } from './orders';
import { productHandlers } from './products';
import { cartsHandlers } from './carts';

export const handlers = [...ordersHandlers, ...productHandlers, ...cartsHandlers];
