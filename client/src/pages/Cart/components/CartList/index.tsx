import { ChangeEventHandler } from 'react';

import { Button, Checkbox } from 'components';
import {
  useCartActions,
  useIdsOfCheckedCarts,
  useIsCheckedAll,
  useTotalCountOfCheckedCarts,
} from 'store/cart';

import { useCarts, useDeleteCarts } from '../../hooks';
import { CartItem, ExpectedPayment } from '../../components';

function CartList() {
  const { data: carts = [], refetch } = useCarts();
  const { mutate: deleteCarts, isLoading } = useDeleteCarts({ onSuccess: refetch });
  const { checkAll, uncheckAll } = useCartActions();

  const isCheckedAll = useIsCheckedAll();
  const totalCount = useTotalCountOfCheckedCarts();
  const checkedCartIds = useIdsOfCheckedCarts();
  const isDisabled = totalCount === 0;

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      checkAll();
    } else {
      uncheckAll();
    }
  };

  const handleClickDeleteButton = () => {
    if (window.confirm('선택하신 상품들을 모두 삭제하시겠습니까?')) {
      deleteCarts(checkedCartIds);
    }
  };

  return (
    <div className="flex">
      <section className="cart-left-section">
        <div className="flex justify-between items-center">
          <Checkbox checked={isCheckedAll} onChange={handleChangeCheckbox}>
            모두선택
          </Checkbox>
          <Button
            type="default"
            disabled={isDisabled}
            loading={isLoading}
            onClick={handleClickDeleteButton}
          >
            상품삭제
          </Button>
        </div>
        <h3 className="cart-title my-20">배송 상품 (총 {carts.length}개)</h3>
        <hr className="divide-line-gray mt-10" />
        {carts.map((cart) => (
          <CartItem key={cart.id} cart={cart} refetchCarts={refetch} />
        ))}
      </section>
      <ExpectedPayment />
    </div>
  );
}

export default CartList;
