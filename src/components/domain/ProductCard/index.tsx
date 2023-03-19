const ProductCard = (product: Product) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div className="flex justify-between">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price}원</span>
        </div>
        <img src="assets/svgs/cart.svg" alt="장바구니" />
      </div>
    </div>
  );
};

export default ProductCard;
