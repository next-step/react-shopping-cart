import { Cart } from 'types/cart';

export interface CheckableCart extends Cart {
  isChecked: boolean;
}
