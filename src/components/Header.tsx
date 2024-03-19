import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NEXTSTEP</h1>
      <nav>
        <ul>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
          <li>
            <Link to="/myorder">주문목록</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
