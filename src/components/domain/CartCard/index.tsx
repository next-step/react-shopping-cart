import CartCardSkeleton from './CartCardSkeleton';
import CartCardContainer from './CartCardContainer'

type Props = {
  cart?: UserCart;
};

const CartCard = ({ cart }: Props) => {
  if (!cart) {
    return (
      <CartCardSkeleton />
    );
  }

  return (
    <CartCardContainer cart={cart} />
  );
};

export default CartCard;
