import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex-col-center">
      <h1 className="global-nav-title">장바구니</h1>
      <br />
      <div className="global-nav-button-box">
        <Link className="global-nav-button" to="/">
          상품 목록
        </Link>
        <Link className="global-nav-button" to="/detail">
          상품 상세
        </Link>
        <Link className="global-nav-button" to="/cart">
          장바구니
        </Link>
        <Link className="global-nav-button" to="/order">
          주문/결제
        </Link>
        <Link className="global-nav-button" to="/order-list">
          주문 목록
        </Link>
        <Link className="global-nav-button" to="/order-detail">
          주문 상세
        </Link>
      </div>
    </header>
  )
}

export default Header
