import { CartIcon } from '@/assets/svgs';
import { LazyImage } from '@/components/common';

const ProductCard = (product: Product) => {
  return (
    <div>
      <LazyImage
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
      />
      <div className="flex justify-between">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price}원</span>
        </div>
        <button>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
