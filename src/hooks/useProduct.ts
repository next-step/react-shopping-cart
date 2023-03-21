import useFetch from './useFetch';
import { ProductType } from '../api/product';
import { useCallback } from 'react';
import { ROUTE } from '../router';
import { useNavigate } from 'react-router-dom';

const useProduct = () => {
  const navigate = useNavigate();
  const { payload, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_PATH}/products`
  );
  const products = payload?.response as ProductType[];

  const onClickProductItem = useCallback((id: number | undefined) => {
    navigate(`${ROUTE.DETAIL}/${id}`);
  }, []);

  return { products, isLoading, error, onClickProductItem };
};

export default useProduct;
