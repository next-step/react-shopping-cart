import { setupWorker, SetupWorker } from 'msw';
import { handlers } from './handlers';

export const worker: SetupWorker = setupWorker(...handlers);
