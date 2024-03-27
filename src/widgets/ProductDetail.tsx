import { useParams } from 'react-router-dom';

import useGetProductDetailQuery from 'src/entities/product/hooks/useGetProductDetailQuery';
import ProductDetailItem from 'src/entities/product/ui/ProductDetailItem';

export default function ProductDetail() {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProductDetailQuery(id || '');

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (!product) {
		return <div className="product-no-items">상품이 존재하지 않습니다.</div>;
	}

	return <ProductDetailItem id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />;
}
