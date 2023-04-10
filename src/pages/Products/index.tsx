import { Product } from '@/components/domain';
import ProductAddCartSuccessModal from '@/components/domain/ProductAddCartSuccessModal';
import useBooleanState from '@/hooks/useBooleanState';

const Products = () => {
  const [open, onOpen, onClose] = useBooleanState(true);

  return (
    <>
      <Product onOpenModal={onOpen} />
      {open && <ProductAddCartSuccessModal onClose={onClose} />}
    </>
  );
};

export default Products;
