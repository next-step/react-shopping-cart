import { setupWorker } from 'msw/browser';

import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';
import { getProductDetailMockHandler } from 'src/entities/product/api/getProductDetail.api';

const handler = [getProductListMockHandler(), getProductDetailMockHandler];

const mswWorker = setupWorker(...handler);

export default mswWorker;
