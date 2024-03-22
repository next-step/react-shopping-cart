import type { Product } from 'src/entities/product/type/product.type';

export interface CartItem {
	id: number;
	product: Product;
}

export interface CartItemSelection extends CartItem {
	quantity: number;
	selected: boolean;
}
