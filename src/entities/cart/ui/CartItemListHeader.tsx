import useCartStore from 'src/entities/cart/store/useCartStore';

export default function CartItemListHeader() {
	const cartCount = Object.keys(useCartStore.use.cart()).length;

	return (
		<>
			<h3 className="cart-title">든든배송 상품({cartCount}개)</h3>
			<hr className="divide-line-gray mt-10" />
		</>
	);
}
