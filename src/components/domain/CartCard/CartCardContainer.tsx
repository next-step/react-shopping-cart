import { TrashIcon } from '@/assets/svgs';
import { Button, CheckBox, LazyImage, Text } from '@/components/common';
import { useCartContext } from '@/components/domain/Cart/CartContext';
import { REMOVE_CONFIRM_MESSAGE } from '@/constant/message';
import { currency } from '@/utils/filter/currency';

type Props = {
  cart: UserCart;
};

const CartCardContainer = ({ cart }: Props) => {
  const { product } = cart;
  const { selectCart, increaseCartItemQty, decreaseCartItemQty, removeItem } =
    useCartContext();

  const handleRemoveItem = (cartItem: UserCart) => {
    const result = confirm(REMOVE_CONFIRM_MESSAGE);
    result && removeItem(cartItem);
  };

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
        <button
          className="cart-trash-svg"
          onClick={() => handleRemoveItem(cart)}
        >
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

export default CartCardContainer;
