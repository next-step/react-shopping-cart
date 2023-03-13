import { Link } from 'react-router-dom';

import { PATHS } from 'constants/router';
import { LogoImage } from 'assets/images';
import { css } from '@emotion/css';

function Header() {
  return (
    <header>
      <nav className="nav flex justify-around">
        <div
          className={css`
            width: 1200px;
            display: flex;
            justify-content: space-between;
          `}
        >
          <div className="flex-center">
            <h1 className="nav-title">
              <Link to={PATHS.HOME} className="flex">
                <img src={LogoImage} alt="Young's Market" width={102} height={48} />
              </Link>
            </h1>
          </div>
          <div className="flex gap-15">
            <Link to={PATHS.CART} className="nav-button flex items-center">
              장바구니
            </Link>
            <Link to={PATHS.ORDER} className="nav-button flex items-center">
              주문목록
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
