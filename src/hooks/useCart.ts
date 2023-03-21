import useFetch from './useFetch';
import { CartItemType } from '../types';

const useCart = () => {
  const { payload, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_PATH}/carts`
  );
  const carts = payload?.response as CartItemType[];

  return { carts, isLoading, error };
};

export default useCart;
