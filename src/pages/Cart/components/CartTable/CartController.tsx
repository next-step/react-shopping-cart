import { TrashIcon } from '@/assets/svgs';
import NumberInput from './NumberInput';
import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartWithProductQuantity } from '@/types';
import { QuantityButtonType } from '../../hooks/useCart';
import useMutation from '@/hooks/useMutation';
import useCartData from '../../hooks/useCartData';

interface CartControllerProps {
  cart: CartWithProductQuantity;
  handleQuantity: (id: string, type: QuantityButtonType) => void;
}

function CartController({ cart, handleQuantity }: CartControllerProps) {
  const { refreshCart } = useCartData();
  const [deleteProduct] = useMutation(`/carts/${cart.id}`, 'DELETE');

  const onClick = () => {
    const result = window.confirm('삭제 하시겠습니까?');
    if (!result) return;

    deleteProduct({});
    refreshCart();
  };

  return (
    <div className="h-full flex flex-col justify-between items-end">
      <div>
        <TrashIcon onClick={onClick} />
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
