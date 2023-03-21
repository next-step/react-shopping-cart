import { ProductModel } from './ProductModel';

export interface CartProductModelPOJO {
  count: number;
  product: ProductModel;
}

export class CartProductModel implements CartProductModelPOJO {
  count = 1;

  product: ProductModel;

  constructor({ count, product }: CartProductModelPOJO) {
    this.count = count;
    this.product = product;
  }
}
