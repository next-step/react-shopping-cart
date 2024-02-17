import React, { memo } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav flex justify-around items-center">
      <div className="flex-center">
        <Link to="">
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </Link>
      </div>
      <div className="gap-15 nav-button-container">
        <Button className="nav-button">
          <Link to="cart">장바구니</Link>
        </Button>
        <Button className="nav-button">
          <Link to="orders">주문목록</Link>
        </Button>
      </div>
    </nav>
  );
};

export default memo(Navbar);
