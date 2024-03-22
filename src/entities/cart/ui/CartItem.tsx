import type { CartItem } from 'src/entities/cart/type/cart.type';
import useCartStore from 'src/entities/cart/store/useCartStore';
import { formatPriceToKRW } from 'src/shared/lib/format';
import useDeleteCartItemMutation from 'src/entities/cart/hooks/useDeleteCartItemMutation';

export default function CartItem({ id, product }: CartItem) {
	const { mutate: deleteCartItem } = useDeleteCartItemMutation();

	const selected = useCartStore.use.cart()[id]?.selected || false;
	const quantity = useCartStore.use.cart()[id]?.quantity || 0;

	const increaseQuantity = useCartStore.use.increaseQuantity();
	const decreaseQuantity = useCartStore.use.decreaseQuantity();
	const toggleItemSelection = useCartStore.use.toggleItemSelection();

	const handleIncreaseQuantity = () => {
		increaseQuantity(id);
	};

	const handleDecreaseQuantity = () => {
		decreaseQuantity(id);
	};

	const handleToggleItemSelection = () => {
		toggleItemSelection(id);
	};

	const handleDeleteCartItem = () => {
		deleteCartItem({ id });
	};

	return (
		<div className="cart-container">
			<div className="flex gap-15 mt-10">
				<input
					className="checkbox"
					name="checkbox"
					type="checkbox"
					checked={selected}
					onChange={handleToggleItemSelection}
				/>
				<img className="w-144 h-144" src={product.imageUrl} alt={product.name} />
				<span className="cart-name">{product.name}</span>
			</div>
			<div className="flex-col-center justify-end gap-15">
				<img className="cart-trash-svg" src="/assets/svgs/trash.svg" alt="삭제" onClick={handleDeleteCartItem} />
				<div className="number-input-container">
					<input type="number" className="number-input" value={quantity} readOnly />
					<div>
						<button className="number-input-button" type="button" onClick={handleIncreaseQuantity}>
							▲
						</button>
						<button className="number-input-button" type="button" onClick={handleDecreaseQuantity}>
							▼
						</button>
					</div>
				</div>
				<span className="cart-price">{formatPriceToKRW(product.price * quantity)}</span>
			</div>
		</div>
	);
}
