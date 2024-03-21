import { MouseEventHandler } from 'react';

import type { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';

export interface ProductItemProps extends Product {
	onClickCart?: MouseEventHandler;
	onClickItem?: MouseEventHandler;
}

export default function ProductListItem({ onClickCart, name, price, imageUrl, id, onClickItem }: ProductItemProps) {
	return (
		<div className="product-item-box" onClick={onClickItem}>
			<img src={imageUrl} alt={name} />
			<div className="flex justify-between p-5">
				<div className="product-info">
					<span className="product-info__name">{name}</span>
					<span className="product-info__price">{formatPriceToKRW(price)}</span>
				</div>
				<button onClick={onClickCart} className="product-cart-button" data-testid={`product-cart-button-${id}`}>
					<img src="/assets/svgs/cart.svg" alt="장바구니" />
				</button>
			</div>
		</div>
	);
}
