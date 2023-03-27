import { ChangeEventHandler } from 'react';

import { Button, Checkbox } from 'components';
import { useCarts } from './hooks';
import { useCartActions, useIsCheckedAll } from 'store/cart';

import CartItem from '../CartItem';
import ExpectedPayment from '../ExpectedPayment';

function CartList() {
  const { data: carts = [] } = useCarts();
  const { checkAll, uncheckAll } = useCartActions();

  const isCheckedAll = useIsCheckedAll();

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      checkAll();
    } else {
      uncheckAll();
    }
  };

  return (
    <div className="flex">
      <section className="cart-left-section">
        <div className="flex justify-between items-center">
          <Checkbox checked={isCheckedAll} onChange={handleChangeCheckbox}>
            모두선택
          </Checkbox>
          <Button type="default">상품삭제</Button>
        </div>
        <h3 className="cart-title my-20">배송 상품 (총 {carts.length}개)</h3>
        <hr className="divide-line-gray mt-10" />
        {carts.map((cart) => (
          <CartItem key={cart.id} cart={cart} />
        ))}
      </section>
      <ExpectedPayment />
    </div>
  );
}

export default CartList;
