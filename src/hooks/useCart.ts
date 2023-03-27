import useCustomQuery from './useCustomQuery';
import { CartItemType } from '../types';

interface UseCartResponse {
  response: CartItemType[];
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<UseCartResponse>(`/carts`);
  const carts = data?.response;

  return { carts, loading, error };
};

export default useCart;
