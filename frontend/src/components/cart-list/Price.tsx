import priceFormat from "../../utils/PriceFormat";

type PriceProps = {
  totalPrice: number;
};

export default function Price({ totalPrice }: PriceProps) {
  return <span className="cart-price">{priceFormat(totalPrice)}원</span>;
}
