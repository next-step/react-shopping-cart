import { ReactNode } from "react";

export type NavbarProps = {
  children: ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title">CLEAN CODE SHOP</h1>
      </div>
      <div className="flex gap-15">
        {children}
        {/* <button className="nav-button">장바구니</button>
        <button className="nav-button">주문목록</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
