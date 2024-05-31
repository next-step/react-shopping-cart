import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import * as styles from './GNB.css';
import Badge from '../Badge/Badge';
import { cartItemQueryOptions } from '../../routes/cart/-queryOptions';
import { useCartStore } from '../../store/cart';

export default function GNB() {
  const { data } = useSuspenseQuery(cartItemQueryOptions());
  const setItems = useCartStore((state) => state.setItems);
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.navTitleContainer}>
          <Link to='/'>
            <h1 className={styles.navTitle}>CLEAN CODE SHOP</h1>
          </Link>
        </div>
        <div className={styles.navMenu}>
          <Badge badgeContent={cartItems.length}>
            <Link to='/cart' className={styles.navButton}>
              장바구니
            </Link>
          </Badge>
          <Link to='/orderList' className={styles.navButton}>
            주문목록
          </Link>
        </div>
      </div>
    </nav>
  );
}
