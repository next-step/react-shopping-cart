import { Link } from '@tanstack/react-router'
import CartLogo from '../../assets/svgs/cart.svg?react'

const Header = () => {
  return (
    <header className="nav">
      <nav className="global-nav-button-box">
        <h1 className="">
          <CartLogo width={49} height={44} fill="#fff" />
          <Link to="/list">Nextstep</Link>
        </h1>

        <div className="nav-sub-menu">
          <Link to="/cart">장바구니</Link>
          <Link to="/order">주문 목록</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
