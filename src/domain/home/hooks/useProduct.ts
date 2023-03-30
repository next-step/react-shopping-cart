import { useCallback } from 'react';
import { ROUTE } from '../../../router';
import { updateCartList } from '../../../apiClient';
import { CONFIRM } from '../../../constant';
import { useRouter, useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartInfoType, ProductInfoType } from '../../../types';
import { usePagination, KEY_PAGE } from '../../../hooks';

interface ProductResponseType {
  productListPerPage: ProductInfoType[];
  totalPage: number;
}

export const KEY_PRODUCT_COUNT = 'product_count';
export const PRODUCT_COUNT = 8;

const useProduct = () => {
  const { routeTo, confirmAndRoute } = useRouter();
  const { currentPage } = usePagination();
  const { data, loading, error } = useCustomQuery<ProductResponseType>(
    `/products?${KEY_PAGE}=${currentPage}&${KEY_PRODUCT_COUNT}=${PRODUCT_COUNT}`
  );
  const { mutate } = useCustomMutation<unknown, CartInfoType>((payload) =>
    updateCartList(payload)
  );

  const addCart = useCallback(async (item: ProductInfoType) => {
    await mutate({ id: Number(item.id), select: true, product: item });
    confirmAndRoute(CONFIRM.CART_AND_ROUTE, ROUTE.CART);
  }, []);

  const navigateToDetailedPage = useCallback((id: number | undefined) => {
    routeTo(`${ROUTE.DETAIL}/${id}`);
  }, []);

  return {
    products: data?.productListPerPage,
    loading,
    error,
    navigateToDetailedPage,
    addCart,
    pagination: {
      currentPage: currentPage,
      totalPage: data?.totalPage,
    },
  };
};

export default useProduct;
