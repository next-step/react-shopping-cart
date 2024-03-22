import { setupWorker } from 'msw/browser';

import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';
import { getProductDetailMockHandler } from 'src/entities/product/api/getProductDetail.api';
import { getCartItemListMockHandler } from 'src/entities/cart/api/getCartItemList.api';
import { postCartItemMockHandler } from 'src/entities/cart/api/postCartItem.api';
import { deleteCartItemMockHandler } from 'src/entities/cart/api/deleteCartItem.api';
import { deleteCartItemListMockHandler } from 'src/entities/cart/api/deleteCartItemList.api';

const handler = [
	getProductListMockHandler(),
	getProductDetailMockHandler,
	getCartItemListMockHandler,
	deleteCartItemMockHandler,
	postCartItemMockHandler,
	deleteCartItemListMockHandler,
];

const mswWorker = setupWorker(...handler);

export default mswWorker;
