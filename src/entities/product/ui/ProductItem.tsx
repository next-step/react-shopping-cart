import type { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';

export interface ProductItemProps extends Product {
	onClickCart: () => void;
}

export default function ProductItem({ onClickCart, name, price, imageUrl, id }: ProductItemProps) {
	return (
		<div className="product-item-box">
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
