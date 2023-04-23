import { Order, ProductAddCartSuccessModal } from '@/components/domain';
import useBooleanState from '@/hooks/useBooleanState';

const Orders = () => {
  const [open, onOpen, onClose] = useBooleanState();
  return (
    <>
      <Order onOpen={onOpen} />
      {open && <ProductAddCartSuccessModal onClose={onClose} />}
    </>
  );
};

export default Orders;
