import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@/apis/Product/getProductDetail';
import { PRODUCT_QUERY_KEYS } from '@/constants/queryKey';

type UseGetProductDetailQuery = {
  id: number;
};

export const useGetProductDetailQuery = ({ id }: UseGetProductDetailQuery) => {
  const { data: product } = useQuery({
    queryKey: PRODUCT_QUERY_KEYS.DETAIL(id),
    queryFn: () => getProductDetail(id),
    staleTime: 60 * 5 * 1000,
    gcTime: 60 * 30 * 1000,
    enabled: !!id,
  });

  return { product };
};
