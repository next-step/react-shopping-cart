import { CartIcon } from '@/assets/svgs';
import { LazyImage } from '@/components/common';
import { currency } from '@/utils/filter/currency';

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
          <span className="product-info__price">{currency(product.price)}</span>
        </div>
        <button>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
