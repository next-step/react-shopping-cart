import { setupWorker } from 'msw';
import productsHandlers from './handlers/productsHandlers';

export const worker = setupWorker(...productsHandlers());
