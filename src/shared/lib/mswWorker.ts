import { setupWorker } from 'msw/browser';
import { http, passthrough } from 'msw';

import { getProductListMockApi } from 'src/entities/product/api/getProductList.api';

const handler = [
	http.get('*.svg', () => passthrough()),
	http.get('https://cdn-mart.baemin.com*', () => passthrough()),
	getProductListMockApi,
];

const mswWorker = setupWorker(...handler);

export default mswWorker;
