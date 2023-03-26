import * as productHandler from './product';
import * as cartHandler from './cart';

export const handlers = [...Object.values(productHandler), ...Object.values(cartHandler)];
