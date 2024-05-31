import { forwardRef } from 'react';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import { useNavigate } from '@tanstack/react-router';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartModal = forwardRef<HTMLDivElement, Props>(
  ({ open, onClose }: Props, ref) => {
    const navigate = useNavigate();
    return (
      <Modal
        ref={ref}
        open={open}
        title='장바구니 담기'
        content='장바구니에 상품을 추가했습니다'
        footer={
          <div
            style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}
          >
            <Button size='small' onClick={() => navigate({ to: '/cart' })}>
              장바구니 이동
            </Button>
            <Button size='small' variant='outlined' onClick={onClose}>
              닫기
            </Button>
          </div>
        }
      />
    );
  }
);

export default CartModal;
