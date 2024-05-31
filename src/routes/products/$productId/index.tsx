import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';
import Button from '../../../components/Button/Button';
import { productQueryOptions } from '../-queryOptions';
import { useAddToCartMutation } from '../-hooks';
import * as styles from '../products.css';

export const ProductDetail = () => {
  const navigate = useNavigate();
  const data = Route.useLoaderData();
  const { mutate } = useAddToCartMutation();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetailContainer}>
        <section className={styles.productDetailLeftSection}>
          <img
            className={styles.productImage}
            src={data.imageUrl}
            alt={data.name}
          />
        </section>

        <section className={styles.productDetailRightSection}>
          <div className={styles.productDetailInfo}>
            <span className={styles.productDetailInfoName}>{data.name}</span>
            <hr className={styles.productDivideLine} />
            <div className={styles.productDetailPriceBox}>
              <span>금액</span>
              <span className={styles.productDetailInfoPrice}>
                {data.price.toLocaleString()}원
              </span>
            </div>
          </div>
          <Button
            variant='contained'
            color='secondary'
            className={styles.addCartButton}
            onClick={() =>
              mutate(data, { onSuccess: () => navigate({ to: '/cart' }) })
            }
          >
            장바구니
          </Button>
        </section>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/products/$productId/')({
  component: ProductDetail,
  parseParams: ({ productId }) => ({
    productId: z.number().int().parse(Number(productId)),
  }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(productQueryOptions(params.productId)),
  pendingComponent: () => <div />,
});
