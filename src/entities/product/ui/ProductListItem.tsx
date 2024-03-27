import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostCartItemMutation from 'src/entities/cart/hooks/usePostCartItemMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

export interface ProductItemProps extends Product {}

export default function ProductListItem({ name, price, imageUrl, id }: ProductItemProps) {
	const navigate = useNavigate();

	const openAlert = useAlertStore.use.open();

	const { mutate: postCartItem } = usePostCartItemMutation({
		onMutate: () => {
			openAlert({
				message: '장바구니에 상품이 추가되었습니다.\n장바구니로 이동하시겠습니까?',
				title: '장바구니',
				confirm: () => {
					navigate('/cart');
				},
			});
		},
	});

	const handleClickCart = (event: MouseEvent) => {
		event.stopPropagation();
		postCartItem({ product: { id, price, name, imageUrl } });
	};

	const handleClickItem = () => {
		navigate(`/product/${id}`);
	};

	return (
		<div className="product-item-box" onClick={handleClickItem} data-testid="product-list-item">
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
