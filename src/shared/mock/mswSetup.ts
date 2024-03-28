import { setupServer } from 'msw/node';

import { beforeAll, afterAll, afterEach } from 'vitest';
import httpHandlers from 'src/shared/lib/mswWorker';

export const server = setupServer(...httpHandlers);

beforeAll(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});
