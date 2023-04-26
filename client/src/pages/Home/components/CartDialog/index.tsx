import { css } from '@emotion/css';

import { Button, Counter, Dialog } from 'components';
import { useCounter, useMutation } from 'hooks';
import { addCart } from 'api';

import { Product } from 'types/product';
import { Carts, Cart } from 'types/cart';

interface CartDialogProps {
  product: Product;
  closeDialog: () => void;
}

function CartDialog({ product, closeDialog }: CartDialogProps) {
  const { price, name } = product;
  const { count, plus, minus } = useCounter(1);
  const totalPrice = price * count;

  const { mutate, isLoading } = useMutation<Carts, Omit<Cart, 'id'>>({
    mutation: addCart,
    onSuccess: () => {
      closeDialog();
      window.alert(`${name} 제품을 장바구니에 추가했습니다.`);
    },
    onError: () => window.alert('제품을 장바구니에 추가하는데 실패했습니다.'),
  });

  const handleClickCartButton = () => {
    mutate({ product, count });
  };

  return (
    <Dialog onClose={closeDialog}>
      <div
        className={css`
          padding: 30px;
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
    </Dialog>
  );
}

export default CartDialog;
