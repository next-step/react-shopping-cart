import useCustomQuery from './useCustomQuery';
import { CartItemType, ProductType } from '../types';
import { useCallback } from 'react';
import { ROUTE } from '../router';
import { useNavigate } from 'react-router-dom';
import { useCustomMutation, useRouter } from './index';
import { updateCartList } from '../api/request';
import { CONFIRM } from '../constant/message';
interface UseProductResponse {
  response: ProductType[];
}

const useProduct = () => {
  const navigate = useNavigate();
  const { confirmAndRoute } = useRouter();
  const { data, isLoading, error } = useCustomQuery<UseProductResponse>(
    `${process.env.REACT_APP_API_PATH}/products`
  );
  const { mutate } = useCustomMutation<unknown, CartItemType>((payload) =>
    updateCartList(payload)
  );
  const addCart = async (item: ProductType) => {
    await mutate({ id: Number(item.id), product: item });
    confirmAndRoute(CONFIRM.CART_AND_ROUTE, ROUTE.CART);
  };

  const navigateToDetailedPage = useCallback((id: number | undefined) => {
    navigate(`${ROUTE.DETAIL}/${id}`);
  }, []);

  return {
    products: data?.response,
    isLoading,
    error,
    navigateToDetailedPage,
    addCart,
  };
};

export default useProduct;
