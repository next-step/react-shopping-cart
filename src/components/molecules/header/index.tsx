import { memo } from 'react';

export interface IHeader {
  onClickLogo?: () => void;
  onClickCart?: () => void;
  onClickOrder?: () => void;
}

function Header({ onClickLogo, onClickCart, onClickOrder }: IHeader) {
  return (
    <header className="nav flex justify-around">
      <div className="flex-center">
        <h1 className="nav-title" onClick={onClickLogo}>CLEAN CODE SHOP</h1>
      </div>
      <div className="flex gap-15">
        <button className="nav-button" onClick={onClickCart}>장바구니</button>
        <button className="nav-button" onClick={onClickOrder}>주문목록</button>
      </div>
    </header>
  );
}

export default memo(Header);
