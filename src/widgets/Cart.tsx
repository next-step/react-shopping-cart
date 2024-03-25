import CartItemSelectPanel from 'src/entities/cart/ui/CartItemSelectPanel';
import CartOrderPanel from 'src/entities/cart/ui/CartOrderPanel';
import CartHeader from 'src/entities/cart/ui/CartHeader';
import CartItemListHeader from 'src/entities/cart/ui/CartItemListHeader';
import CartItemList from 'src/entities/cart/ui/CartItemList';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

export default function Cart() {
	const { data: cartItemList, isLoading } = useGetCartItemListQuery();

	if (isLoading) {
		return (
			<div className="product-no-items" data-testid="cart-page">
				Loading...
			</div>
		);
	}

	if (cartItemList.length === 0) {
		return (
			<div className="product-no-items" data-testid="cart-page">
				장바구니에 담긴 상품이 없습니다.
			</div>
		);
	}

	return (
		<section className="cart-section" data-testid="cart-page">
			<CartHeader />
			<div className="flex">
				<section className="cart-left-section">
					<CartItemSelectPanel />
					<CartItemListHeader />
					<CartItemList cartItemList={cartItemList} />
				</section>
				<section className="cart-right-section">
					<CartOrderPanel />
				</section>
			</div>
		</section>
	);
}
