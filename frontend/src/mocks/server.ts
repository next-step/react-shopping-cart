import { setupWorker } from 'msw';

import handlers from './handlers';

const server = setupWorker(...handlers);

export default server;
