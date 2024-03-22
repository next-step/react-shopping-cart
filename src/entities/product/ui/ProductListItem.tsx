import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostCartItemMutation from 'src/entities/cart/hooks/usePostCartItemMutation';

export interface ProductItemProps extends Product {}

export default function ProductListItem({ name, price, imageUrl, id }: ProductItemProps) {
	const navigate = useNavigate();

	const { mutate: postCartItem } = usePostCartItemMutation();

	const handleClickCart = (event: MouseEvent) => {
		event.stopPropagation();
		postCartItem({ product: { id, price, name, imageUrl } });
	};

	const handleClickItem = () => {
		navigate(`/product/${id}`);
	};

	return (
		<div className="product-item-box" onClick={handleClickItem}>
			<img src={imageUrl} alt={name} />
			<div className="flex justify-between p-5">
				<div className="product-info">
					<span className="product-info__name">{name}</span>
					<span className="product-info__price">{formatPriceToKRW(price)}</span>
				</div>
				<button onClick={handleClickCart} className="product-cart-button" data-testid={`product-cart-button-${id}`}>
					<img src="/assets/svgs/cart.svg" alt="장바구니" />
				</button>
			</div>
		</div>
	);
}
