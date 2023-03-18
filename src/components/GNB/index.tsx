import type { RoutePath } from '@/routes/Route';
import { useRouter } from '@/routes/useRouter';
import { Link } from 'react-router-dom';

type Props = {
  navList?: { path: RoutePath; text: string }[];
};

const GNB = ({ navList = NAV_LIST }: Props) => {
  return (
    <nav className="nav flex justify-between items-center py-300">
      <div className="flex-center">
        <h1 className="nav-title">{NAV_TITLE}</h1>
      </div>
      <div className="flex gap-15">
        {navList &&
          navList.map((nav,idx) => (
            <Link to={nav.path} key={idx}>
              <button className="nav-button">{nav.text}</button>
            </Link>
          ))}
      </div>
    </nav>
  )
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
    path: '/order',
    text: '주문 목록',
  },
];
