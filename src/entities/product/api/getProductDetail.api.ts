import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Product } from 'src/entities/product/type/product.type';
import dbJSON from 'src/shared/mock/db.json';
import { Response } from 'src/shared/types/api';

export const getProductDetailMockHandler = http.get('*/products/:id', ({ params }) => {
	const { id } = params;

	if (typeof id !== 'string') {
		return new HttpResponse(null, { status: 403, statusText: 'Invalid Id' });
	}

	const product = dbJSON.products.find((product: Product) => product.id === id);

	if (!product) {
		return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
	}

	return HttpResponse.json({ response: product });
});

export default async function getProductDetailApi({ id }: Pick<Product, 'id'>) {
	const response = await axiosInstance.get<Response<Product>>(`/products/${id}`);

	return response.data;
}
