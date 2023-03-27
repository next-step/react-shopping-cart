import { TrashIcon } from '@/assets/svgs';
import { NumberInput } from '@/components/Common';
import { CartWithProductQuantity } from '@/types';

function CartController({ cart }: { cart: CartWithProductQuantity }) {
  return (
    <div className="h-full flex flex-col justify-between items-end">
      <div>
        <TrashIcon />
      </div>
      <div>
        <NumberInput />
      </div>
      <div>{cart?.product.price.toLocaleString()}원</div>
    </div>
  );
}

export default CartController;
