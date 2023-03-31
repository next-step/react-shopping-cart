import { useCustomQuery } from '../../../hooks';
import { CartItemType } from '../../../types';

interface ResponseType {
  response: CartItemType[];
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<ResponseType>(`/carts`);
  const cartData = data?.response;

  return { cartData, loading, error };
};

export default useCart;
