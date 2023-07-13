import React from "react";

type TProps = {
  quantity: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

function QuantityHandler({ quantity, onIncrement, onDecrement }: TProps) {
  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={quantity} readOnly />
      <div>
        <button type="button" className="number-input-button" onClick={onIncrement}>
          ▲
        </button>
        <button type="button" className="number-input-button" onClick={onDecrement}>
          ▼
        </button>
      </div>
    </div>
  );
}

export default QuantityHandler;
