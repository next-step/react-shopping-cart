import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../../store/cartSlice";

export type QuantityCounterProps = {
  productId: number;
};
// 고민: 전역 데이터(카트)의 아이템 수량을 바꾸는 dispatch는 어디서 써야하는 걸까? QuantityInput? 아니면 그 상위 컴포넌트? id는 어디까지 propsDrilling 되어야하나...
const QuantityCounter = ({ productId }: QuantityCounterProps) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (count < 20) {
      setCount((prevCount) => prevCount + 1);
      dispatch(increaseQuantity(productId));
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      dispatch(decreaseQuantity(productId));
    }
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={count} />
      <div>
        <button className="number-input-button" onClick={handleIncrement}>
          ▲
        </button>
        <button className="number-input-button" onClick={handleDecrement}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
