import { memo } from 'react';

import { Button, Text } from '@/components/common';
import Modal from '@/components/common/Modal';
import { useRouter } from '@/routes/useRouter';

type Props = {
  onClose: () => void;
};

const ProductAddCartSuccessModal = ({ onClose }: Props) => {
  const { go } = useRouter();

  return (
    <Modal onClose={onClose}>
      <Text as="h2">상품이 장바구니에 담겼어요!</Text>
      <div className="flex justify-end gap-10">
        <Button theme="outline" onClick={onClose}>
          닫기
        </Button>
        <Button size="small" onClick={() => go('/carts')}>
          장바구니로 이동하기
        </Button>
      </div>
    </Modal>
  );
};

export default memo(ProductAddCartSuccessModal);
