import { usePagination } from 'hooks';
import { useEffect } from 'react';
import { fetchProductList } from 'store/feature/product/productslice';
import { useAppDispatch, useAppSelector } from '../../store/index';

const useProductListPage = () => {
  const { currentPage } = usePagination();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.product);
  const status = productStore.status;
  const limit = 8;
  const offset = (currentPage - 1) * limit;
  const products = productStore.productList.slice(offset, offset + limit);
  const totalPage = Math.ceil(productStore.productList.length / limit);

  useEffect(() => {
    dispatch(fetchProductList('/products'));
  }, []);

  return { products, status, totalPage };
};
export default useProductListPage;
