import { Link } from 'react-router-dom';

export default function GNB() {
	return (
		<nav className="nav flex justify-around">
			<div className="flex-center">
				<h1 className="nav-title" data-testid="gnb-home">
					<Link to="/">CLEAN CODE SHOP</Link>
				</h1>
			</div>
			<div className="flex gap-15">
				<button className="nav-button" data-testid="gnb-cart">
					<Link to="/cart">장바구니</Link>
				</button>
				<button className="nav-button" data-testid="gnb-order-list">
					<Link to="/order/list">주문목록</Link>
				</button>
			</div>
		</nav>
	);
}
