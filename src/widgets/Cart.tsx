import CartItemSelectPanel from 'src/entities/cart/ui/CartItemSelectPanel';
import CartOrderPanel from 'src/entities/cart/ui/CartOrderPanel';
import CartHeader from 'src/entities/cart/ui/CartHeader';
import CartItemListHeader from 'src/entities/cart/ui/CartItemListHeader';
import CartItemList from 'src/entities/cart/ui/CartItemList';

export default function Cart() {
	return (
		<section className="cart-section">
			<CartHeader />
			<div className="flex">
				<section className="cart-left-section">
					<CartItemSelectPanel />
					<CartItemListHeader />
					<CartItemList />
				</section>
				<section className="cart-right-section">
					<CartOrderPanel />
				</section>
			</div>
		</section>
	);
}
