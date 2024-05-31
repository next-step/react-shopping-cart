import Button from '../../../components/Button/Button';
import { Product } from '../../../types';
import { useAddToCartMutation } from '../../products/-hooks';
import * as styles from '../order.css';

interface Props {
  product: Product;
  openModal: () => void;
}

export const OrderItemCard = ({ product, openModal }: Props) => {
  const { name, quantity, price, imageUrl } = product;
  const { mutate } = useAddToCartMutation();

  return (
    <div className={styles.orderListItem}>
      <div className={styles.orderDetailPriceContainer}>
        <img className={styles.orderItemImage} src={imageUrl} alt={name} />
        <div className={styles.orderItemInfoContainer}>
          <span className={styles.orderName}>{name}</span>
          <span className={styles.orderInfo}>
            {price.toLocaleString()}원 / 수량: {quantity}개
          </span>
        </div>
      </div>
      <Button
        variant='contained'
        color='primary'
        size='small'
        className={styles.orderButton}
        onClick={() =>
          mutate(product, {
            onSuccess: () => openModal(),
          })
        }
      >
        장바구니
      </Button>
    </div>
  );
};
