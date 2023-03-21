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

  setCount(setter: (prev: number) => number | number) {
    if (typeof setter === 'function') {
      this.count = setter(this.count);
      return;
    }

    const newValue = setter;
    this.count = newValue;
  }

  getTotalPrice() {
    return this.product.price * this.count;
  }
}
