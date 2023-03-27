import useCustomQuery from './useCustomQuery';
import { ProductType } from '../types';
import { useParams } from 'react-router-dom';

interface UseProductDetailResponse {
  response: ProductType;
}
const useProductDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useCustomQuery<UseProductDetailResponse>(
    `/products/${id}`
  );

  const productData = data?.response;

  return { productData, loading, error };
};

export default useProductDetail;
