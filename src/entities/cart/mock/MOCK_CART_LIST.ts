import { CartItemData } from 'src/entities/cart/type/cart.type';

const MOCK_CART_LIST: CartItemData[] = [];

export const clearMockCartList = () => {
	MOCK_CART_LIST.splice(0, MOCK_CART_LIST.length);
};

export default MOCK_CART_LIST;
