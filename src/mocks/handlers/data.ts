import { products as productData } from '../db.json';
import { Cart, Product, Order } from '../../types';

export const carts = new Map<number, Cart>();
export const orders = new Map<number, Order>();
export const products = new Map<number, Product>(
  productData.map((product) => [product.id, product])
);
