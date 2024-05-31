import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { cartItemQueryOptions } from './-queryOptions';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useCartStore } from '../../store/cart';
import * as styles from './cart.css';
import { CartItemList, CartOrderInfo } from './-components';

function Cart() {
  const data = Route.useLoaderData();
  const setItems = useCartStore((state) => state.setItems);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <>
      <section className={styles.cartSectionContainer}>
        <PageTitle>장바구니</PageTitle>

        <div className={styles.cartInnerContainer}>
          {data.length ? (
            <div className={styles.cartSection}>
              <CartItemList />
              <CartOrderInfo />
            </div>
          ) : (
            <div className={styles.emptyCartContainer}>
              장바구니가 비었습니다
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute('/cart/')({
  component: Cart,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(cartItemQueryOptions()),
  pendingComponent: () => <div />,
});
