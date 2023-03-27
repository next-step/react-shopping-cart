import { Button } from '@/components/Common';
import OrderSummary from '@/components/Common/Summary';
import { useCartContext } from '../context/CartContext';

function CartAside() {
  const { totalPrice, isEmptyChecked } = useCartContext();
  return (
    <div className="border-[1px] border-gray-200 p-6 my-20 rounded-md">
      <OrderSummary
        title="결제예상금액"
        totalPrice={totalPrice.toLocaleString()}
        renderButton={() => (
          <Button isFullWidth size="lg" disabled={isEmptyChecked} variant={isEmptyChecked ? 'disabled' : 'primary'}>
            주문하기
          </Button>
        )}
      />
    </div>
  );
}

export default CartAside;
