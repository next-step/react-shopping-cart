import { CartIcon } from '@/assets/svgs';

const ProductCard = (product: Product) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
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
