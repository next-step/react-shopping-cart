import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Product } from 'src/entities/product/type/product.type';
import dbJSON from 'src/shared/mock/db.json';
import { Response } from 'src/shared/types/api';

export const getProductListMockHandler = (products?: Product[]) =>
	http.get('*/products', () => {
		return HttpResponse.json({ response: products ?? dbJSON.products });
	});

export default async function getProductListApi() {
	const response = await axiosInstance.get<Response<Product[]>>('/products');

	return response.data;
}
