import { Dispatch, SetStateAction } from 'react';
import { useAddToCartMutation } from '../-hooks';
import CartIcon from '../../../assets/svgs/cart.svg?react';
import { Product } from '../../../types';
import Skeleton from '../../../components/Skeleton/Skeleton';
import * as styles from '../products.css';

interface Props {
  product: Product;
  onClick: () => void;
  setShowSnackBar: Dispatch<SetStateAction<boolean>>;
}

const ProductCard = ({ product, onClick, setShowSnackBar }: Props) => {
  const { mutate } = useAddToCartMutation();
  if (!product) return <Skeleton width={285} height={285} />;
  const { name, price, imageUrl } = product;

  return (
    <div>
      <img
        src={imageUrl}
        alt={name}
        onClick={onClick}
        style={{ width: 280, height: 280, cursor: 'pointer' }}
      />
      <div className={styles.productListCard}>
        <div className={styles.productInfo}>
          <span className={styles.productInfoName}>{name}</span>
          <span>{price.toLocaleString()}원</span>
        </div>
        <CartIcon
          style={{ cursor: 'pointer' }}
          onClick={() =>
            mutate(product, {
              onSuccess: () => setShowSnackBar(true),
            })
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
