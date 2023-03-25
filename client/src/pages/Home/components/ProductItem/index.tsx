import { useIsOpen } from 'hooks';
import { Button } from 'components';

import { CartSVG } from 'assets/svgs';
import { Product } from 'types/product';

import CartDialog from '../CartDialog';

interface ProductProps {
  product: Product;
}

function ProductItem({ product }: ProductProps) {
  const { imageUrl, name, price } = product;
  const { isOpen, close: closeDialog, open: openDialog } = useIsOpen();

  return (
    <div>
      {isOpen && <CartDialog product={product} closeDialog={closeDialog} />}
      <img src={imageUrl} alt={name} width={280} height={280} loading="lazy" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString('ko')}원</span>
        </div>
        <Button onClick={openDialog}>
          <CartSVG width={18} />
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
