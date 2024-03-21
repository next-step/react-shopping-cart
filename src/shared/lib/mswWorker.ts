import { setupWorker } from 'msw/browser';

import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';

const handler = [getProductListMockHandler()];

const mswWorker = setupWorker(...handler);

export default mswWorker;
