import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

import useGetProductListQuery from 'src/entities/product/hooks/useGetProductListQuery';
import ProductItem from 'src/entities/product/ui/ProductItem';

export default function ProductList() {
	const navigate = useNavigate();

	const { data, isLoading } = useGetProductListQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleClickCart = (id: number) => (event: MouseEvent) => {
		// TODO: 장바구니에 상품 추가

		event.stopPropagation();

		console.log('장바구니에 상품 추가', id);
	};

	const handleClickItem = (id: number) => () => {
		navigate(`/product/${id}`);
	};

	return (
		<section className="product-container">
			{data?.response.map(product => (
				<ProductItem
					key={product.id}
					onClickCart={handleClickCart(product.id)}
					onClickItem={handleClickItem(product.id)}
					{...product}
				/>
			))}
		</section>
	);
}
