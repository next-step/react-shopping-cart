import { ChangeEventHandler } from 'react';

import { Button, Checkbox } from 'components';
import { useCartActions, useCheckedCarts, useIsCheckedAll } from 'store/cart';

import { useCartList, useDeleteCarts } from '../../hooks';
import { CartItem, ExpectedPayment } from '../../components';

function CartList() {
  const { data: carts = [], refetch: refetchCartList } = useCartList();
  const { mutateAsync: deleteCarts, isLoading } = useDeleteCarts();
  const { checkAll, uncheckAll } = useCartActions();

  const checkedCarts = useCheckedCarts();
  const isCheckedAll = useIsCheckedAll();

  const isDisabled = checkedCarts.size === 0;
  const isEmpty = carts.length === 0;

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      checkAll();
    } else {
      uncheckAll();
    }
  };

  const handleClickDeleteButton = async () => {
    if (window.confirm('선택하신 상품들을 모두 삭제하시겠습니까?')) {
      const ids = Array.from(checkedCarts).map(({ id }) => id);

      await deleteCarts(ids);
      refetchCartList();
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
        {isEmpty && <h3 className="flex-center p-20 mt-40">장바구니에 담긴 상품이 없습니다.</h3>}
        {carts.map((cart) => (
          <CartItem key={cart.id} cart={cart} refetchCartList={refetchCartList} />
        ))}
      </section>
      <ExpectedPayment />
    </div>
  );
}

export default CartList;
