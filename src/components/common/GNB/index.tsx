import type { RoutePath } from '@/routes/Route';

import { Link } from 'react-router-dom';

type Props = {
  navList?: { path: RoutePath; text: string }[];
};

const GNB = ({ navList = NAV_LIST }: Props) => {
  return (
    <nav className="nav flex justify-between items-center py-300">
      <Link className="flex-center nav-title" to={'/'}>
        <h2>{NAV_TITLE}</h2>
      </Link>
      <div className="flex gap-15">
        {navList &&
          navList.map((nav, idx) => (
            <Link to={nav.path} key={idx}>
              <button className="nav-button">{nav.text}</button>
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default GNB;

const NAV_TITLE = 'NEXT STEP';
const NAV_LIST: { path: RoutePath; text: string }[] = [
  {
    path: '/carts',
    text: '장바구니',
  },
  {
    path: '/products',
    text: '상품 목록',
  },
  {
    path: '/orders',
    text: '주문 목록',
  },
];
