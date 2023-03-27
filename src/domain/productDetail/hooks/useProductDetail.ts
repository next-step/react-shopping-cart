import useCustomQuery from '../../../hooks/useCustomQuery';
import { ProductInfoType } from '../../../types';
import { useParams } from 'react-router-dom';

interface ResponseType {
  response: ProductInfoType;
}
const useProductDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useCustomQuery<ResponseType>(
    `/products/${id}`
  );

  const productData = data?.response;

  return { productData, loading, error };
};

export default useProductDetail;
