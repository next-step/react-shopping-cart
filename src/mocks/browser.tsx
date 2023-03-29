import { setupWorker } from 'msw';

import cartHandlers from './handlers/cartHandlers';
import orderHandler from './handlers/ordertHandlers';
import productsHandlers from './handlers/productsHandlers';

export const worker = setupWorker(
  ...productsHandlers,
  ...cartHandlers,
  ...orderHandler
);
