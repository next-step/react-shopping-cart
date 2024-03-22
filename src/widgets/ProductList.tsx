import useGetProductListQuery from 'src/entities/product/hooks/useGetProductListQuery';
import ProductListItem from 'src/entities/product/ui/ProductListItem';

export default function ProductList() {
	const { data: productList, isLoading } = useGetProductListQuery();

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (productList.length === 0) {
		return <div className="product-no-items">상품이 존재하지 않습니다.</div>;
	}

	return (
		<section className="product-container">
			{productList.map(product => (
				<ProductListItem key={product.id} {...product} />
			))}
		</section>
	);
}
