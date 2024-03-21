import { useQuery } from '@tanstack/react-query';

import getProductListApi from 'src/entities/product/api/getProductList.api';

export default function useGetProductListQuery() {
	return useQuery({
		queryKey: ['productList'],
		queryFn: getProductListApi,
	});
}
