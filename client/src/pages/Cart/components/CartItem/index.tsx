import { ChangeEventHandler } from 'react';
import { css, cx } from '@emotion/css';

import { Button, Checkbox, Counter } from 'components';
import { useCounter } from 'hooks';
import { useCartActions, useIsCheckedCart } from 'store/cart';

import { colors } from 'constants/colors';
import { Cart } from 'types/cart';
import { TrashSVG } from 'assets/svgs';

interface CartItemProps {
  cart: Cart;
}

function CartItem({ cart }: CartItemProps) {
  const { count: defaultCount, product, id } = cart;
  const { imageUrl, name, price } = product;
  const { count, minus, plus } = useCounter(defaultCount);
  const {
    toggle: toggleIsChecked,
    increase: increaseCartById,
    decrease: decreaseCartById,
  } = useCartActions();

  const isChecked = useIsCheckedCart(id);
  const totalPrice = price * count;

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    toggleIsChecked(id);
  };

  const handleClickPlusButton = () => {
    plus();
    increaseCartById(id);
  };

  const handleClickMinusButton = () => {
    minus();
    decreaseCartById(id);
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
        <Button>
          <TrashSVG width={18} />
        </Button>
        <Counter
          count={count}
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
