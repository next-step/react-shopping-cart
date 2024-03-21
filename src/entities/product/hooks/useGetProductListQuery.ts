import { useQuery } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import getProductListApi from 'src/entities/product/api/getProductList.api';
import { Product } from 'src/entities/product/type/product.type';

export default function useGetProductListQuery() {
	return useQuery<Response<Product[]>, unknown, Product[]>({
		queryKey: ['productList'],
		queryFn: getProductListApi,
		select: data => data.response,
		initialData: { response: [] },
	});
}
