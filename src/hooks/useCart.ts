import useCustomQuery from './useCustomQuery';
import { CartItemType } from '../types';

interface UseCartResponse {
  response: CartItemType[];
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<UseCartResponse>(`/carts`);
  const cartData = data?.response;

  return { cartData, loading, error };
};

export default useCart;
