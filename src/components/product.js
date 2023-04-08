import CartIcon from "../assets/svgs/cart.svg";

export default function Product({ id, name, price, imageUrl }) {
  return (
    <div data-id={id}>
      <img src={imageUrl} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <img src={CartIcon} alt="장바구니" />
      </div>
    </div>
  );
}
