import type { Product } from 'src/entities/product/type/product.type';

export interface CartItemData {
	id: number;
	product: Product;
}

export interface CartItemSelection extends CartItemData {
	quantity: number;
	selected: boolean;
}
