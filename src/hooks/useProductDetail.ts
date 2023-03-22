import useFetch from './useFetch';
import { ProductType } from '../types';
import { useParams } from 'react-router-dom';

interface UseProductDetailResponse {
  response: ProductType;
}
const useProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<UseProductDetailResponse>(
    `${process.env.REACT_APP_API_PATH}/products/${id}`
  );

  const productData = data?.response;

  return { productData, isLoading, error };
};

export default useProductDetail;
