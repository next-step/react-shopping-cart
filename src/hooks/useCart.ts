import useCustomQuery from './useCustomQuery';
import { CartInfoType } from '../types';

interface ResponseType {
  response: CartInfoType[];
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<ResponseType>(`/carts`);
  const cartData = data?.response;

  return { cartData, loading, error };
};

export default useCart;
