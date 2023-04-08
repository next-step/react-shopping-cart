import CartTrashImage from "./CartTrashImage";

export default function CartContainer({ product }) {
  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked="true"
          />
          <img
            className="w-144 h-144"
            src={product.imageUrl}
            alt={product.name}
          />
          <span className="cart-name">{product.name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <CartTrashImage />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">{product.price}원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
}
