import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title">CLEAN CODE SHOP</h1>
      </div>
      <div className="flex gap-15">
        <Button className="nav-button" onClick={() => alert("장바구니 이동")}>
          장바구니
        </Button>
        <Button className="nav-button" onClick={() => alert("주문목록 이동")}>
          주문목록
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
