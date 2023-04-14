import { ChangeEventHandler } from 'react';
import { css, cx } from '@emotion/css';

import { Button, Checkbox, Counter } from 'components';
import { useCounter } from 'hooks';
import { useCartActions, useCheckedCarts } from 'store/cart';

import { colors } from 'constants/colors';
import { Cart } from 'types/cart';
import { TrashSVG } from 'assets/svgs';

import { useDeleteCarts } from '../../hooks';

interface CartItemProps {
  cart: Cart;
  refetchCartList: () => void;
}

function CartItem({ cart, refetchCartList }: CartItemProps) {
  const {
    count: defaultCount,
    product: { imageUrl, name, price },
    id,
  } = cart;

  const { mutateAsync: deleteCarts, isLoading } = useDeleteCarts();
  const counter = useCounter(defaultCount);
  const cartAction = useCartActions();
  const checkedCarts = useCheckedCarts();

  const isChecked = checkedCarts.has(cart);
  const totalPrice = price * counter.count;

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    cartAction.toggle(cart);
  };

  const handleClickPlusButton = () => {
    counter.plus();
    cartAction.increase(id);
  };

  const handleClickMinusButton = () => {
    counter.minus();
    cartAction.decrease(id);
  };

  const handlePressDeleteButton = async () => {
    if (window.confirm('선택하신 상품을 모두 삭제하시겠습니까?')) {
      await deleteCarts([id]);
      refetchCartList();
    }
  };

  return (
    <div
      className={cx(
        'cart-container',
        css`
          margin: 10px 0;
          padding: 0 0 20px;
          &:not(:last-child) {
            border-bottom: 1px solid ${colors.gray600};
          }
        `
      )}
    >
      <div className="flex gap-15 mt-10">
        <Checkbox checked={isChecked} onChange={handleChangeCheckbox} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          gap: 15px;
        `}
      >
        <Button onClick={handlePressDeleteButton} loading={isLoading}>
          <TrashSVG width={18} />
        </Button>
        <Counter
          count={counter.count}
          onMinus={handleClickMinusButton}
          onPlus={handleClickPlusButton}
          min={1}
          max={20}
        />
        <span className="cart-price">{totalPrice.toLocaleString('ko')}원</span>
      </div>
    </div>
  );
}

export default CartItem;
