import { ROUTES_URL } from '@/RootRouter';
import CartIcon from '@/assets/svgs/Cart';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={ROUTES_URL.HOME}>
      <div className="flex text-white font-bold gap-1 text-3xl justify-center items-center">
        <CartIcon fill="white" width={36} height={36} />
        <div>SHOP</div>
      </div>
    </Link>
  );
}

export default Logo;
