import useCustomQuery from './useCustomQuery';
import { CartItemType } from '../types';

interface UseCartResponse {
  response: CartItemType[];
}
const useCart = () => {
  const { data, isLoading, error } = useCustomQuery<UseCartResponse>(
    `${process.env.REACT_APP_API_PATH}/carts`
  );
  const carts = data?.response;

  return { carts, isLoading, error };
};

export default useCart;
