import { useQuery } from '@tanstack/react-query';

import { Response } from 'src/shared/types/api';
import getProductDetailApi from 'src/entities/product/api/getProductDetail.api';
import { Product } from 'src/entities/product/type/product.type';

export default function useGetProductDetailQuery(id: number) {
	return useQuery<Response<Product>, unknown, Product>({
		queryKey: ['productDetail', id],
		queryFn: () => getProductDetailApi({ id }),
		select: data => data.response,
		initialData: { response: { id: 0, name: '', price: 0, imageUrl: '' } },
		enabled: id !== 0,
	});
}
