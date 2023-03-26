import { setupWorker } from 'msw';
import productsHandlers from './handlers/productsHandlers';
import cartHandlers from './handlers/cartHandlers';
import orderHandler from './handlers/ordertHandlers';

export const worker = setupWorker(
  ...productsHandlers,
  ...cartHandlers,
  ...orderHandler
);
