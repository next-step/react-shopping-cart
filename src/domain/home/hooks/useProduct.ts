import { useCallback } from 'react';
import { ROUTE } from '../../../router';
import { CONFIRM } from '../../../constant';
import { useRouter, useCustomQuery } from '../../../hooks';
import { ProductDataType } from '../../../types';
import { usePagination, KEY_PAGE } from '../../../hooks';
import { useCartDispatch } from '../../../context/CartContext';

interface ProductResponseType {
  productListPerPage: ProductDataType[];
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
  // const { mutate } = useCustomMutation<unknown, CartItemType>((payload) =>
  //   updateCartList(payload)
  // );
  const cartDispatch = useCartDispatch();

  const addCart = useCallback(async (item: ProductDataType) => {
    // await mutate({ id: Number(item.id), select: true, product: item });
    cartDispatch({ type: 'ADD_CART', product: item });
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
