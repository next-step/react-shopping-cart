import { useCallback } from 'react';
import { ROUTE } from '../../../router';
import { updateCartList } from '../../../apiClient';
import { CONFIRM } from '../../../constant';
import { useRouter, useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartInfoType, ProductInfoType } from '../../../types';

interface ResponseType {
  response: ProductResponseType;
}
interface ProductResponseType {
  productListPerPage: ProductInfoType[];
  totalPage: number;
}

export const QUERY_PAGE = 'page';
const DEFAULT_QUERY_PAGE = 1;

const useProduct = () => {
  const { routeTo, confirmAndRoute, getLocationQuery } = useRouter();

  const currentPage = getLocationQuery(QUERY_PAGE) ?? DEFAULT_QUERY_PAGE;
  const { data, loading, error } = useCustomQuery<ResponseType>(
    `/products?${QUERY_PAGE}=${currentPage}`
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
    products: data?.response.productListPerPage,
    loading,
    error,
    navigateToDetailedPage,
    addCart,
    pagination: {
      currentPage: Number(currentPage),
      totalPage: data?.response.totalPage,
    },
  };
};

export default useProduct;
