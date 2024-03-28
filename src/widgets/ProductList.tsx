import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ProductListItem from 'src/entities/product/ui/ProductListItem';
import useGetProductListInfiniteScroll from 'src/entities/product/hooks/useGetProductListInfiniteScroll';

export default function ProductList() {
	const { data, hasPreviousPage, hasNextPage, isFetchedAfterMount, fetchNextPage, fetchPreviousPage, isLoading } =
		useGetProductListInfiniteScroll();

	const { ref: prevLoading, inView: isPrevInView } = useInView();

	const { ref: nextLoading, inView: isNextInView } = useInView();

	useEffect(() => {
		if (isPrevInView) {
			fetchPreviousPage();
		}
	}, [isPrevInView, fetchPreviousPage]);

	useEffect(() => {
		if (isNextInView) {
			fetchNextPage();
		}
	}, [isNextInView, fetchNextPage]);

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (isFetchedAfterMount && !hasPreviousPage && !hasNextPage && data?.pages[0].response.content.length === 0) {
		return <div className="product-no-items">상품이 존재하지 않습니다.</div>;
	}

	return (
		<>
			{isFetchedAfterMount && hasPreviousPage ? (
				<div ref={prevLoading} className="product-no-items">
					Loading...
				</div>
			) : null}
			<section className="product-container">
				{data?.pages.map(page =>
					page.response.content.map(product => <ProductListItem key={product.id} {...product} />),
				)}
			</section>
			{isFetchedAfterMount && hasNextPage ? (
				<div ref={nextLoading} className="product-no-items">
					Loading...
				</div>
			) : null}
		</>
	);
}
