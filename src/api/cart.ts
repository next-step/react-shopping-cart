import axios from 'axios';
import { ProductType } from './product';

export interface CartItemType {
  id: number;
  product: ProductType;
}
export const fetchCartList = async (): Promise<null | CartItemType[]> => {
  try {
    const { data } = await axios(`${process.env.REACT_APP_API_URL}/carts`);
    return data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
