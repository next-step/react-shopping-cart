import { createPortal } from 'react-dom';
import { css } from '@emotion/css';

import { Button, Counter } from 'components';
import { useCounter, useMutation } from 'hooks';

import { colors } from 'constants/colors';
import { API } from 'constants/api';
import { Product } from 'types/product';
import { Carts, Cart } from 'types/cart';

const dialogRootEl = document.getElementById('dialog-root');

interface CartDialogProps {
  product: Product;
  closeDialog: () => void;
}

function CartDialog({ product, closeDialog }: CartDialogProps) {
  const { price, name } = product;
  const { count, plus, minus } = useCounter(1);
  const totalPrice = price * count;

  const { mutate: addCart, isLoading } = useMutation<Carts, Omit<Cart, 'id'>>({
    url: API.CART,
    options: { method: 'POST' },
    onSuccess: () => {
      closeDialog();
      window.alert(`${name} 제품을 장바구니에 추가했습니다.`);
    },
    onError: () => window.alert('제품을 장바구니에 추가하는데 실패했습니다.'),
  });

  const handleClickCartButton = () => {
    addCart({ product, count });
  };

  return createPortal(
    <div
      className={css`
        position: fixed;
        inset: 0;
        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          height: auto;
          width: 440px;
          overflow-x: hidden;
          padding: 30px;
          border-radius: 12px;
          background-color: ${colors.white};
        `}
      >
        <div
          className={css`
            font-size: 14px;
            line-height: 19px;
            margin: 0 0 10px;
          `}
        >
          {name}
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 20px;
          `}
        >
          <div>{totalPrice.toLocaleString('ko')}원</div>
          <Counter min={1} count={count} onPlus={plus} onMinus={minus} />
        </div>
        <div
          className={css`
            display: flex;
            gap: 10px;
          `}
        >
          <Button
            size="large"
            onClick={closeDialog}
            className={css`
              width: 100%;
            `}
          >
            취소
          </Button>
          <Button
            type="primary"
            size="large"
            loading={isLoading}
            onClick={handleClickCartButton}
            className={css`
              width: 100%;
            `}
          >
            장바구니 담기
          </Button>
        </div>
      </div>
    </div>,
    dialogRootEl as Element
  );
}

export default CartDialog;
