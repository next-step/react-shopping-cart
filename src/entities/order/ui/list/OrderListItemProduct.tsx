import { useNavigate } from 'react-router-dom';

import { OrderDetail } from 'src/entities/order/types/order.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostCartItemMutation from 'src/entities/cart/hooks/usePostCartItemMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

export default function OrderListItemProduct({ name, quantity, imageUrl, price, id }: OrderDetail) {
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

	const handleAddToCart = () => {
		postCartItem({ product: { id, price, name, imageUrl } });
	};

	return (
		<div className="order-list-item">
			<div className="flex gap-15 mt-10">
				<img className="w-144 h-144" src={imageUrl} alt={name} />
				<div className="flex-col gap-15">
					<span className="order-name">{name}</span>
					<span className="order-info">
						{formatPriceToKRW(price)} / 수량: {quantity}개
					</span>
				</div>
			</div>
			<button
				className="primary-button-small flex-center self-start"
				type="button"
				onClick={handleAddToCart}
				aria-label={`cart-button-${id}`}
			>
				장바구니
			</button>
		</div>
	);
}
