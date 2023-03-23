import { CartItem } from "types/type";

import trash from "assets/svgs/trash.svg";

const Item = ({ item }: { item: CartItem }) => {
  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={true}
          />
          <img
            className="w-144 h-144"
            src={item.product.imageUrl}
            alt="PET보틀-정사각(420ml)"
          />
          <span className="cart-name">{item.product.name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img className="cart-trash-svg" src={trash} alt="삭제" />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">{item.product.price}</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};

export default Item;
