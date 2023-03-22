import { setupWorker } from 'msw';
import productsHandlers from './handlers/productsHandlers';
import cartHandlers from './handlers/cartHandlers';

export const worker = setupWorker(...productsHandlers, ...cartHandlers);
