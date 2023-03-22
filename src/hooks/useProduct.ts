import useFetch from './useFetch';
import { ProductType } from '../types';
import { useCallback } from 'react';
import { ROUTE } from '../router';
import { useNavigate } from 'react-router-dom';
interface UseProductResponse {
  response: ProductType[];
}

const useProduct = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<UseProductResponse>(
    `${process.env.REACT_APP_API_PATH}/products`
  );

  const products = data?.response;

  const onClickProductItem = useCallback((id: number | undefined) => {
    navigate(`${ROUTE.DETAIL}/${id}`);
  }, []);

  return { products, isLoading, error, onClickProductItem };
};

export default useProduct;
