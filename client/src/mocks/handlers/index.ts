import { productHandlers } from './product';
import { cartHandlers } from './cart';
import { orderHandlers } from './order';

export const handlers = [...productHandlers, ...cartHandlers, ...orderHandlers];
