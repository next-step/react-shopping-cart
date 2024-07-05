import { Link } from '@tanstack/react-router';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import Button from '@components/common/Button/Button';
import useCartStore from '@/store/cartStore';

const Logo = () => {
  return (
    <div
      className={css({
        alignItems: 'center',
      })}
    >
      <Button variant='ghost' colorScheme='blue'>
        <h1
          className={css({
            color: 'white',
            fontWeight: 'bold',
            fontSize: {
              base: '24px',
              sm: '32px',
              lg: '36px',
            },
          })}
        >
          🛒 NEXTSTEP
        </h1>
      </Button>
    </div>
  );
};

export default function Header() {
  const cart = useCartStore.use.cart();

  return (
    <header className={headerContainer}>
      <nav className={navContainer}>
        <Link to='/list'>
          <Logo />
        </Link>

        <div
          className={flex({
            gap: {
              base: '8px',
              sm: '18px',
            },
          })}
        >
          <Link to='/cart'>
            <span className={headerLink}>
              {`장바구니${cart.length > 0 ? ` (${cart.length})` : ''}`}
            </span>
          </Link>

          <Link to='/orderList'>
            <span className={headerLink}>주문목록</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

const headerContainer = css({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minWidth: '375px',
  height: {
    base: '60px',
    sm: '80px',
  },
  backgroundColor: 'blue.300',
  zIndex: 1000,
});

const navContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1280px',
  width: '100%',
  padding: '0 20px',
});

const headerLink = css({
  color: 'white',
  fontWeight: 'semibold',
  fontSize: {
    base: '16px',
    sm: '20px',
    lg: '22px',
  },
});
