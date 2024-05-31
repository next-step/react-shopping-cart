import { forwardRef } from 'react';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';

type Props = {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
};

const DeleteConfirmModal = forwardRef<HTMLDivElement, Props>(
  ({ open, onClose, onOk }: Props, ref) => {
    return (
      <Modal
        ref={ref}
        open={open}
        title='장바구니 상품 삭제'
        content='선택한 상품들을 삭제하시겠습니까?'
        footer={
          <div
            style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}
          >
            <Button
              size='small'
              onClick={() => {
                onOk();
                onClose();
              }}
            >
              삭제하기
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

export default DeleteConfirmModal;
