import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex-col-center">
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <h1 className="nav-title">
            <Link to="/">CLEAN CODE SHOP</Link>
          </h1>
        </div>
        <div className="flex gap-15">
          <button className="nav-button">
            <Link to="/cart">장바구니</Link>
          </button>
          <button className="nav-button">
            <Link to="/orders">주문목록</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
