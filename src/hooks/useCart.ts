import useCustomQuery from './useCustomQuery';
import { CartItemType } from '../types';

interface UseCartResponse {
  response: CartItemType[];
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<UseCartResponse>(
    `${process.env.REACT_APP_API_PATH}/carts`
  );
  const carts = data?.response;

  return { carts, loading, error };
};

export default useCart;
