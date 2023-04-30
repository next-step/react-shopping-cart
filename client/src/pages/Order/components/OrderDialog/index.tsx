import { css } from '@emotion/css';

import { Button, Dialog } from 'components';
import { colors } from 'constants/colors';
import { useRouter } from 'hooks';

import { OrderDetail } from 'types/order';

interface OrderDialogProps {
  onClose: () => void;
  product: OrderDetail;
}

function OrderDialog({ onClose, product }: OrderDialogProps) {
  const { name, count } = product;
  const router = useRouter();

  const handleClickMoveButton = () => {
    router.go('/cart');
  };

  return (
    <Dialog onClose={onClose} width="medium">
      <div
        className={css`
          padding: 30px;
        `}
      >
        <div
          className={css`
            font-size: 16px;
            line-height: 19px;
            margin: 0 0 10px;
          `}
        >
          {name}
        </div>
        <div
          className={css`
            font-size: 14px;
            color: ${colors.gray700};
            margin: 0 0 20px;
          `}
        >
          총 {count}개가 장비구니에 담겼습니다.
        </div>
        <div
          className={css`
            display: flex;
            gap: 10px;
          `}
        >
          <Button
            size="large"
            onClick={onClose}
            className={css`
              width: 100%;
            `}
          >
            닫기
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={handleClickMoveButton}
            className={css`
              width: 100%;
            `}
          >
            장바구니로 이동하기
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

export default OrderDialog;
