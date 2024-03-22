import useCartStore from 'src/entities/cart/store/useCartStore';
import { formatPriceToKRW } from 'src/shared/lib/format';

export default function CartOrderPanel() {
	const cartCount = useCartStore(state =>
		Object.values(state.cart).reduce((acc, item) => acc + (item.selected ? 1 : 0), 0),
	);

	const totalPrice = useCartStore(state =>
		Object.values(state.cart).reduce((acc, item) => acc + (item.selected ? item.product.price * item.quantity : 0), 0),
	);

	return (
		<>
			<div className="cart-right-section__top">
				<h3 className="cart-title">결제예상금액</h3>
			</div>
			<hr className="divide-line-thin" />
			<div className="cart-right-section__bottom">
				<div className="flex justify-between p-20 mt-20">
					<span className="highlight-text">결제예상금액</span>
					<span className="highlight-text">{formatPriceToKRW(totalPrice)}</span>
				</div>
				<div className="flex-center mt-30 mx-10">
					<button className="primary-button flex-center">주문하기({cartCount}개)</button>
				</div>
			</div>
		</>
	);
}
