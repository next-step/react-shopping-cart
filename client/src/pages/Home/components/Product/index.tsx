import { useMutation } from 'hooks';
import { Button } from 'components';

import { CartSVG } from 'assets/svgs';
import { ICart } from 'types/cart';
import { IProduct } from 'types/product';
import { API } from 'constants/api';

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const { id, imageUrl, name, price } = product;
  const { mutate: addCart, isLoading } = useMutation<ICart[], ICart>({
    url: API.CART,
    options: { method: 'POST' },
    onSuccess: (data) => console.log(data),
  });

  const handleClickCartButton = () => {
    const newCart = { id, product: { name, price, imageUrl } };

    addCart(newCart);
  };

  return (
    <div>
      <img src={imageUrl} alt={name} width={280} height={280} loading="lazy" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString('ko')}원</span>
        </div>
        <Button onClick={handleClickCartButton} loading={isLoading}>
          <CartSVG width={18} />
        </Button>
      </div>
    </div>
  );
}

export default Product;
