import useRouter from '../../hooks/useRoute';
import * as React from 'react';
import { URL } from '../../../constants/url';

const Header = () => {
  const { movePage } = useRouter();
  const handleNavigate: React.MouseEventHandler = (evt) => {
    const { target } = evt;
    if (!(target instanceof HTMLElement)) return;
    if (typeof target.dataset.path !== 'string') return;
    movePage(target.dataset.path);
  };
  return (
    <header className="flex-col-center">
      <nav className="nav flex justify-around" onClick={handleNavigate}>
        <div className="flex-center">
          <h1 className="nav-title" data-path={URL.HOME}>
            CLEAN CODE SHOP
          </h1>
        </div>
        <ul className="flex gap-15">
          <li className="nav-button" data-path={URL.CART}>
            장바구니
          </li>
          <li className="nav-button" data-path={URL.ORDER}>
            주문목록
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
