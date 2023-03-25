import { Button } from '@/components/Common';
import OrderSummary from '@/components/Common/Summary';

function CartAside() {
  return (
    <div className="border-[1px] border-gray-200 p-6 my-20 rounded-md">
      <OrderSummary
        title="결제예상금액"
        totalPrice="10"
        renderButton={() => (
          <Button isFullWidth size="lg">
            주문하기
          </Button>
        )}
      />
    </div>
  );
}

export default CartAside;
