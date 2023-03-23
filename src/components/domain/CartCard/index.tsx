import { Button, LazyImage, Text } from '@/components/common';
import CheckBox, { useCheckBox } from '@/components/common/CheckBox';
import { currency } from '@/utils/filter/currency';

type Props = {
  cart: UserCart;
};

const CartCard = ({ cart }: Props) => {
  const { handleSelect } = useCheckBox(cart.checked);
  const { product } = cart;

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <CheckBox checked={cart.checked} onSelect={handleSelect} />
        <LazyImage
          className="w-144 h-144"
          width={144}
          height={144}
          src={product.imageUrl}
          alt={product.name}
        />
        <Text className="cart-name">{product.name}</Text>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src="./assets/svgs/trash.svg"
          alt="삭제"
        />
        <div className="number-input-container">
          <input type="number" className="number-input" defaultValue={1} />
          <div>
            <Button type="number">▲</Button>
            <Button type="number">▼</Button>
          </div>
        </div>
        <Text className="cart-price">{currency(product.price)}</Text>
      </div>
    </div>
  );
};

export default CartCard;
