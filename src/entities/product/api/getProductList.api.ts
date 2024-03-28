import { http, HttpResponse, delay } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Product } from 'src/entities/product/type/product.type';
import dbJSON from 'src/shared/mock/db.json';
import { Pagination, Response } from 'src/shared/types/api';

export const getProductListMockHandler = (products?: Product[]) =>
	http.get('*/products', async ({ request }) => {
		await delay();

		const url = new URL(request.url);

		const page = url.searchParams.get('page');

		const pageSize = url.searchParams.get('pageSize');

		const productsArray = products ?? dbJSON.products;

		if (page === null) {
			return HttpResponse.json({
				response: {
					content: productsArray,
					totalElements: productsArray.length,
					totalPages: 1,
				},
			});
		}

		const pageInt = parseInt(page, 10);

		const pageSizeInt = parseInt(pageSize ?? '12', 10);

		const totalElements = productsArray.length;

		const totalPages = Math.max(1, Math.ceil(totalElements / pageSizeInt));

		const nextPageParam: number | undefined = pageInt + 1 < totalPages ? pageInt + 1 : undefined;

		const previousPageParam: number | undefined = pageInt - 1 >= 0 ? pageInt - 1 : undefined;

		return HttpResponse.json({
			response: {
				content: productsArray.slice(pageInt * pageSizeInt, (pageInt + 1) * pageSizeInt),
				totalElements,
				totalPages,
				nextPageParam,
				previousPageParam,
			},
		});
	});

export default async function getProductListApiPagination({ pageParam }: { pageParam: number }) {
	const response = await axiosInstance.get<Response<Pagination<Product>>>('/products', {
		params: {
			page: pageParam,
		},
	});

	return response.data;
}
