import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title">
          <Link to="/">
            <button>CLEAN CODE SHOP</button>
          </Link>
        </h1>
      </div>
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
