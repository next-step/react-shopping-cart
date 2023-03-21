import { ProductModel } from './ProductModel';

export interface CartProductModelPOJO {
  isChecked: boolean;
  count: number;
  product: ProductModel;
}

export class CartProductModel implements CartProductModelPOJO {
  isChecked: boolean;

  count = 1;

  product: ProductModel;

  constructor({ isChecked, count, product }: CartProductModelPOJO) {
    this.isChecked = isChecked;
    this.count = count;
    this.product = product;
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked;
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
    if (!this.isChecked) return 0;
    return this.product.price * this.count;
  }
}
