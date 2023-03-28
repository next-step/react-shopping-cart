import { useCallback } from 'react';
import { ROUTE } from '../../../router';
import { updateCartList } from '../../../apiClient';
import { CONFIRM } from '../../../constant';
import { useRouter, useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartInfoType, ProductInfoType } from '../../../types';

interface ResponseType {
  response: ProductInfoType[];
}

export const QUERY_PAGE = 'page';
const DEFAULT_QUERY_PAGE = 1;

const useProduct = () => {
  const { routeTo, confirmAndRoute, getLocationQuery } = useRouter();

  const pageValue = getLocationQuery(QUERY_PAGE) ?? DEFAULT_QUERY_PAGE;
  const { data, loading, error } = useCustomQuery<ResponseType>(
    `/products?${QUERY_PAGE}=${pageValue}`
  );
  const { mutate } = useCustomMutation<unknown, CartInfoType>((payload) =>
    updateCartList(payload)
  );

  const addCart = useCallback(async (item: ProductInfoType) => {
    await mutate({ id: Number(item.id), product: item });
    confirmAndRoute(CONFIRM.CART_AND_ROUTE, ROUTE.CART);
  }, []);

  const navigateToDetailedPage = useCallback((id: number | undefined) => {
    routeTo(`${ROUTE.DETAIL}/${id}`);
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
