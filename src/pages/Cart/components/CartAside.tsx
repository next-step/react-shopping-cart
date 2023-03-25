import { Button } from '@/components/Common';
import OrderSummary from '@/components/Common/Summary';

function CartAside() {
  return (
    <div className="border-[1px] border-gray-200 py-6 px-4 my-20 rounded-md">
      <OrderSummary
        title="hello"
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
