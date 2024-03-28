import type { CartItemData } from 'src/entities/cart/type/cart.type';
import useCartStore from 'src/entities/cart/store/useCartStore';
import { formatPriceToKRW } from 'src/shared/lib/format';
import useDeleteCartItemMutation from 'src/entities/cart/hooks/useDeleteCartItemMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

const MAX_QUANTITY = 20;
const MIN_QUANTITY = 1;

export default function CartItem({ id, product }: CartItemData) {
	const openAlert = useAlertStore.use.open();

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
		openAlert({
			title: '장바구니 상품 삭제',
			message: `${product.name}을(를) 장바구니에서 삭제하시겠습니까?`,
			confirm: () => deleteCartItem({ id }),
		});
	};

	return (
		<div className="cart-container" data-testid="cart-item">
			<div className="flex gap-15 mt-10">
				<input
					className="checkbox"
					name="checkbox"
					type="checkbox"
					checked={selected}
					onChange={handleToggleItemSelection}
					data-testid={`select-item-${id}`}
					aria-label="select-item"
				/>
				<img className="w-144 h-144" src={product.imageUrl} alt={product.name} />
				<span className="cart-name">{product.name}</span>
			</div>
			<div className="flex-col-center justify-end gap-15">
				<img className="cart-trash-svg" src="/assets/svgs/trash.svg" alt="삭제" onClick={handleDeleteCartItem} />
				<div className="number-input-container">
					<input type="number" className="number-input" value={quantity} readOnly />
					<div>
						<button
							className="number-input-button"
							type="button"
							onClick={handleIncreaseQuantity}
							aria-label={`increase-quantity-${id}`}
							disabled={quantity >= MAX_QUANTITY}
						>
							▲
						</button>
						<button
							className="number-input-button"
							type="button"
							onClick={handleDecreaseQuantity}
							aria-label={`decrease-quantity-${id}`}
							disabled={quantity <= MIN_QUANTITY}
						>
							▼
						</button>
					</div>
				</div>
				<span className="cart-price">{formatPriceToKRW(product.price * quantity)}</span>
			</div>
		</div>
	);
}
