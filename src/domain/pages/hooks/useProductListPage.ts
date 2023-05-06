import { useDialog, usePagination } from 'common/hooks';
import { getProductList } from 'domain/store/feature/product/productslice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

const useProductListPage = () => {
  const { currentPage } = usePagination();
  const { dialogTitle, isOpenDialog } = useDialog();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.productReducer);
  const products = productStore.productList.products;
  const status = productStore.status;
  const totalPage = productStore.productList.TOTAL_PAGE;
  const errorMessage = productStore.errorMessage;

  useEffect(() => {
    dispatch(getProductList(currentPage));
  }, [currentPage]);

  return { status, products, totalPage, isOpenDialog, dialogTitle, errorMessage };
};

export default useProductListPage;
