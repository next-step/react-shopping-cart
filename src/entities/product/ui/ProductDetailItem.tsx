import { MouseEventHandler } from 'react';

import { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';

export interface ProductDetailItemProps extends Product {
	onClickCartButton?: MouseEventHandler;
}

export default function ProductDetailItem({ onClickCartButton, name, price, imageUrl }: ProductDetailItemProps) {
	return (
		<div className="product-detail-container">
			<div className="flex-col-center w-480">
				<img className="w-480 h-480 mb-10" src={imageUrl} alt={name} />
				<div className="product-detail-info">
					<span className="product-detail-info__name">{name}</span>
					<hr className="divide-line-gray my-20" />
					<div className="flex justify-between">
						<span>금액</span>
						<span className="product-detail-info__price">{formatPriceToKRW(price)}</span>
					</div>
				</div>
				<button
					className="product-detail-button flex-center mt-20"
					type="button"
					onClick={onClickCartButton}
					data-testid="product-detail-button"
				>
					장바구니
				</button>
			</div>
		</div>
	);
}
