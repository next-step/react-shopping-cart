import useFetch from './useFetch';
import { ProductType } from '../types';
import { useParams } from 'react-router-dom';

const useProductDetail = () => {
  const { id } = useParams();
  const { payload, isLoading, error } = useFetch(
    `${process.env.REACT_APP_API_PATH}/products/${id}`
  );

  const productData = payload?.response as ProductType;

  return { productData, isLoading, error };
};

export default useProductDetail;
