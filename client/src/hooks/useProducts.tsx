import { useEffect } from 'react';
import { fetchProductList } from 'store/feature/product/productslice';
import { useAppDispatch, useAppSelector } from '../store/index';

const useProducts = () => {
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.product);
  const products = productStore.productList;
  const status = productStore.status;

  useEffect(() => {
    dispatch(fetchProductList('/products'));
  }, []);

  return { products, status };
};
export default useProducts;
