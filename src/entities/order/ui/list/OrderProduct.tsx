import { OrderDetail } from 'src/entities/order/types/order.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostCartItemMutation from 'src/entities/cart/hooks/usePostCartItemMutation';

export default function OrderProduct({ name, quantity, imageUrl, price, id }: OrderDetail) {
	const { mutate: postCartItem } = usePostCartItemMutation();

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
			<button className="primary-button-small flex-center self-start" type="button" onClick={handleAddToCart}>
				장바구니
			</button>
		</div>
	);
}
