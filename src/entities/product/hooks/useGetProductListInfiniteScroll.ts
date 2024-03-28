import { useInfiniteQuery } from '@tanstack/react-query';

import getProductListApiPagination from 'src/entities/product/api/getProductList.api';

export default function useGetProductListInfiniteScroll() {
	return useInfiniteQuery({
		queryKey: ['productList'],
		queryFn: ({ pageParam }) => getProductListApiPagination({ pageParam }),
		getNextPageParam: lastPage => lastPage.response.nextPageParam,
		getPreviousPageParam: firstPage => firstPage.response.previousPageParam,
		initialPageParam: 0,
	});
}
