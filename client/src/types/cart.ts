import { IProduct } from './product';

export interface ICart {
  id: number;
  product: Omit<IProduct, 'id'>;
}
