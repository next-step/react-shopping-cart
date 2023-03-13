import { Link } from 'react-router-dom';
import ROUTE from '../../routes/route';

const Header = () => {
  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <Link to={ROUTE.HOME}>
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </Link>
      </div>
      <div className="flex gap-15">
        <Link to={ROUTE.CART}>
          <button className="nav-button">장바구니</button>
        </Link>
        <Link to={ROUTE.ORDER_LIST}>
          <button className="nav-button">주문목록</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
