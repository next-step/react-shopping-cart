import cart from "../../../../assets/svgs/cart.svg";

type CartIconType = {
  onClick: () => void;
};

const CartIcon = ({ onClick }: CartIconType) => {
  return <img src={cart} alt="장바구니" onClick={onClick} />;
};

export default CartIcon;
