import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '@/assets/logo.svg'

const Nav = () => {
  return (
    <nav className="nav flex justify-between items-center">
      <h1 className="nav-title">
        <Link to="/">
          <div className="flex items-center gap-30">
            <Logo width={30} height={30} />
            <p>ㅅㄹㅅ</p>
          </div>
        </Link>
      </h1>
      <div className="flex gap-15">
        <button className="nav-button">
          <Link to="/cart">장바구니</Link>
        </button>
        <button className="nav-button">
          <Link to="/order-list">주문목록</Link>
        </button>
      </div>
    </nav>
  )
}

export default Nav
