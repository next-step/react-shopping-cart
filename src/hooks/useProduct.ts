import useCustomQuery from './useCustomQuery';
import { CartInfoType, ProductInfoType } from '../types';
import { useCallback } from 'react';
import { ROUTE } from '../router';
import { useNavigate } from 'react-router-dom';
import { useCustomMutation, useRouter } from './index';
import { updateCartList } from '../api/request';
import { CONFIRM } from '../constant';
interface ResponseType {
  response: ProductInfoType[];
}

const useProduct = () => {
  const navigate = useNavigate();
  const { confirmAndRoute } = useRouter();
  const { data, loading, error } = useCustomQuery<ResponseType>(`/products`);
  const { mutate } = useCustomMutation<unknown, CartInfoType>((payload) =>
    updateCartList(payload)
  );
  const addCart = useCallback(async (item: ProductInfoType) => {
    await mutate({ id: Number(item.id), product: item });
    confirmAndRoute(CONFIRM.CART_AND_ROUTE, ROUTE.CART);
  }, []);

  const navigateToDetailedPage = useCallback((id: number | undefined) => {
    navigate(`${ROUTE.DETAIL}/${id}`);
  }, []);

  return {
    products: data?.response,
    loading,
    error,
    navigateToDetailedPage,
    addCart,
  };
};

export default useProduct;
