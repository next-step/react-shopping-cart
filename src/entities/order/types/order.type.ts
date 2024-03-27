import { Product } from 'src/entities/product/type/product.type';

export interface OrderDetail extends Product {
	quantity: number;
}

export interface Order {
	id: string;
	orderDetails: OrderDetail[];
	isPaid: boolean;
}
