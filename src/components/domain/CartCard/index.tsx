import CartCardContainer from './CartCardContainer';
import CartCardSkeleton from './CartCardSkeleton';

type Props = {
  cart?: UserCart;
};

const CartCard = ({ cart }: Props) => {
  if (!cart) {
    return <CartCardSkeleton />;
  }

  return <CartCardContainer cart={cart} />;
};

export default CartCard;
