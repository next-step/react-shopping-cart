import { Product, ProductAddCartSuccessModal } from '@/components/domain';
import useBooleanState from '@/hooks/useBooleanState';

const Products = () => {
  const [open, onOpen, onClose] = useBooleanState();

  return (
    <>
      <Product onOpenModal={onOpen} />
      {open && <ProductAddCartSuccessModal onClose={onClose} />}
    </>
  );
};

export default Products;
