import { Button, Checkbox, Counter } from 'components';
import { useCounter } from 'hooks';

import { ICart } from 'types/cart';
import { TrashSVG } from 'assets/svgs';
import { css, cx } from '@emotion/css';
import { colors } from 'constants/colors';

interface CartItemProps {
  cart: ICart;
}

function CartItem({ cart }: CartItemProps) {
  const { count: defaultCount, product } = cart;
  const { imageUrl, name, price } = product;
  const { count, minus, plus } = useCounter(defaultCount);
  const totalPrice = price * count;

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
        <Checkbox />
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
        <Counter count={count} onMinus={minus} onPlus={plus} min={1} />
        <span className="cart-price">{totalPrice.toLocaleString('ko')}원</span>
      </div>
    </div>
  );
}

export default CartItem;
