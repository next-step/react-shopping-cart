import { usePagination } from 'hooks';
import { useEffect } from 'react';
import { getProductList } from 'store/feature/product/productslice';
import { useAppDispatch, useAppSelector } from '../../store/index';

const useProductListPage = () => {
  const { currentPage } = usePagination();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.product);
  const products = productStore.productList.products;

  const status = productStore.status;
  const totalPage = productStore.productList.TOTAL_PAGE;

  console.log(currentPage);
  useEffect(() => {
    dispatch(getProductList(currentPage));
  }, []);

  return { products, status, totalPage };
};
export default useProductListPage;
