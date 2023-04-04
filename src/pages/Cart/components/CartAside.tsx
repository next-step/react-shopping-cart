import { Button } from '@/components/Common';
import OrderSummary from '@/components/Common/Summary';
import { useCartContext } from '../context/CartContext';
import useMutation from '@/hooks/useMutation';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { ProductWithQuantity } from '@/types';
import { ROUTES_URL } from '@/RootRouter';

function CartAside() {
  const { checkedListIds, totalPrice, isEmptyChecked, onlyCheckedCartList } = useCartContext();
  const navigate = useNavigate();

  const [deleteProductSelected] = useMutation(`/carts?${checkedListIds.map(id => `cartId=${id}`).join('&')}`, 'DELETE');

  const [onPayment, { data: paymentResponse }] = useMutation<ProductWithQuantity[]>(`/orders`, 'POST');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = window.confirm('선택한 상품을 구매하시겠습니까?');

    if (!result) return;

    onPayment(onlyCheckedCartList);
    deleteProductSelected({});
  };

  useEffect(() => {
    if (paymentResponse && paymentResponse?.ok) {
      navigate(ROUTES_URL.PAYMENT);
    }
  }, [paymentResponse, paymentResponse?.ok]);

  return (
    <form onSubmit={onSubmit} className="border-[1px] border-gray-200 p-6 my-20 rounded-md">
      <OrderSummary
        title="결제예상금액"
        totalPrice={totalPrice.toLocaleString()}
        rightAddon={
          <Button
            type="submit"
            isFullWidth
            size="lg"
            disabled={isEmptyChecked}
            variant={isEmptyChecked ? 'disabled' : 'primary'}
          >
            주문하기({checkedListIds.length}개)
          </Button>
        }
      />
    </form>
  );
}

export default CartAside;
