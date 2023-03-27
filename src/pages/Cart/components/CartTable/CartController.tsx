import { TrashIcon } from '@/assets/svgs';
import { NumberInput } from '@/components/Common';
import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartWithProductQuantity } from '@/types';
import { QuantityButtonType } from '../../hooks/useCart';

interface CartControllerProps {
  cart: CartWithProductQuantity;
  handleQuantity: (id: string, type: QuantityButtonType) => void;
}

function CartController({ cart, handleQuantity }: CartControllerProps) {
  return (
    <div className="h-full flex flex-col justify-between items-end">
      <div>
        <TrashIcon />
      </div>
      <div>
        <NumberInput
          id={cart.id.toString()}
          handleQuantity={handleQuantity}
          value={cart.product.quantity}
          min={CART_PRODUCT_QUANTITY.MIN}
          max={CART_PRODUCT_QUANTITY.MAX}
        />
      </div>
      <div>{cart?.product.price.toLocaleString()}원</div>
    </div>
  );
}

export default CartController;
