import { memo } from 'react';

import * as cartApi from '@/api/cart';
import { CartIcon, LoaderIcon } from '@/assets/svgs';
import { LazyImage } from '@/components/common';
import useHttp from '@/hooks/useHttp';
import { currency } from '@/utils/filter/currency';

type Props = {
  product?: Product;
  onOpenModal?: () => void;
};

const ProductCard = ({ product, onOpenModal }: Props) => {
  if (!product) {
    return (
      <div className="product-card flex-col gap-10">
        <LazyImage width={280} height={250} />
        <div className="flex justify-between w-280 h-5">
          <div className="product-info animated-bg"></div>
        </div>
      </div>
    );
  }

  const { sendRequest, loading = false } = useHttp<Cart>(cartApi.postAddCart);

  const handleClickCart = async () => {
    const newCart = await sendRequest(product);
    if (!newCart) return;
    onOpenModal?.();
  };

  return (
    <div>
      <LazyImage
        src={product.imageUrl}
        alt={product.name}
        width={280}
        height={280}
      />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{currency(product.price)}</span>
        </div>
        <button onClick={handleClickCart}>
          {loading ? <LoaderIcon /> : <CartIcon />}
        </button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
