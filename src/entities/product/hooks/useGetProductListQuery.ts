import { useQuery } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import getProductListApi from 'src/entities/product/api/getProductList.api';
import { Product } from 'src/entities/product/type/product.type';
import { Pagination } from 'src/shared/types/api';

export default function useGetProductListQuery() {
	return useQuery<Response<Pagination<Product>>, unknown, Product[]>({
		queryKey: ['productList'],
		queryFn: getProductListApi,
		select: data => data.response.content,
	});
}
