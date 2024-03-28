import { Link } from 'react-router-dom';

import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

export default function GNB() {
	const { data: cartItemList } = useGetCartItemListQuery();

	return (
		<nav className="nav flex justify-around">
			<div className="flex-center">
				<h1 className="nav-title" data-testid="gnb-home">
					<Link to="/">CLEAN CODE SHOP</Link>
				</h1>
			</div>
			<div className="flex gap-15 items-center">
				<Link to="/cart" className="nav-button" data-testid="gnb-cart">
					{(cartItemList?.length || 0) > 0 && <div className="nav-button-badge" data-testid="cart-badge" />}
					장바구니
				</Link>
				<Link to="/order/list" className="nav-button" data-testid="gnb-order-list">
					주문목록
				</Link>
			</div>
		</nav>
	);
}
