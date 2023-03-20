import { ROUTES_URL } from '@/RootRouter';
import { Link } from 'react-router-dom';

function Menu() {
  const menu = [
    {
      id: '장바구니',
      name: '장바구니',
      to: ROUTES_URL.CARTS,
    },
    {
      id: '주문목록',
      name: '주문목록',
      to: ROUTES_URL.ORDER_LIST,
    },
  ];

  return (
    <div className="flex text-white font-bold gap-10">
      {menu.map(({ id, name, to }, i) => (
        <Link key={`${id}-${i}`} to={to}>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
