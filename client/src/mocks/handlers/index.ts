import { productHandlers } from './product';
import { cartHandlers } from './cart';

export const handlers = [...productHandlers, ...cartHandlers];
