import { setupWorker, type SetupWorker } from 'msw';
import { handlers } from './handlers';

export const worker: SetupWorker = setupWorker(...handlers);
