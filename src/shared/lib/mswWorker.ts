import { getProductListMockHandler } from 'src/entities/product/api/getProductList.api';
import { getProductDetailMockHandler } from 'src/entities/product/api/getProductDetail.api';
import { getCartItemListMockHandler } from 'src/entities/cart/api/getCartItemList.api';
import { postCartItemMockHandler } from 'src/entities/cart/api/postCartItem.api';
import { deleteCartItemMockHandler } from 'src/entities/cart/api/deleteCartItem.api';
import { deleteCartItemListMockHandler } from 'src/entities/cart/api/deleteCartItemList.api';
import { getOrderListMockHandler } from 'src/entities/order/api/getOrderList.api';
import { getOrderDetailMockHandler } from 'src/entities/order/api/getOrderDetail.api';
import { postOrderMockHandler } from 'src/entities/order/api/postOrder.api';
import { putOrderIsPaidMockHandler } from 'src/entities/order/api/putOrderIsPaid.api';

const httpHandlers = [
	getProductListMockHandler(),
	getProductDetailMockHandler,
	getCartItemListMockHandler,
	deleteCartItemMockHandler,
	postCartItemMockHandler,
	deleteCartItemListMockHandler,
	getOrderListMockHandler,
	getOrderDetailMockHandler,
	postOrderMockHandler,
	putOrderIsPaidMockHandler,
];

export default httpHandlers;
