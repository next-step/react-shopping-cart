import type { Product } from 'src/entities/product/type/product.type';

export interface CartItemData {
	id: string;
	product: Product;
}

export interface CartItemSelection extends CartItemData {
	quantity: number;
	selected: boolean;
}
