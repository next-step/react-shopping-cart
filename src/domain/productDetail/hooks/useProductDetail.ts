import useCustomQuery from '../../../hooks/useCustomQuery';
import { ProductDataType } from '../../../types';
import { useParams } from 'react-router-dom';

interface ResponseType {
  response: ProductDataType;
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
