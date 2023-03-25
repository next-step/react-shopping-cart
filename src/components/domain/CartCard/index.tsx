import { TrashIcon } from '@/assets/svgs';
import { Button, LazyImage, Text } from '@/components/common';
import CheckBox from '@/components/common/CheckBox';
import { currency } from '@/utils/filter/currency';
import { useCartContext } from '../Cart/CartContext';

type Props = {
  cart: UserCart;
};

const CartCard = ({ cart }: Props) => {
  const { selectCart, increaseCartItemQty, decreaseCartItemQty, removeItem } =
    useCartContext();
  const { product } = cart;

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <CheckBox checked={cart.checked} onSelect={() => selectCart(cart)} />
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
        <button className="cart-trash-svg" onClick={() => removeItem(cart)}>
          <TrashIcon />
        </button>
        <div className="number-input-container">
          <input
            type="number"
            className="number-input"
            value={cart.quantity}
            readOnly
          />
          <div>
            <Button theme="number" onClick={() => increaseCartItemQty(cart)}>
              ▲
            </Button>
            <Button theme="number" onClick={() => decreaseCartItemQty(cart)}>
              ▼
            </Button>
          </div>
        </div>
        <Text className="cart-price">{currency(product.price)}</Text>
      </div>
    </div>
  );
};

export default CartCard;
