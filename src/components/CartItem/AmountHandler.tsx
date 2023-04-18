import React from "react";

type TAmountHandlerProps = {
  amount: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

function AmountHandler({ amount, onIncrement, onDecrement }: TAmountHandlerProps) {
  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={amount} />
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

export default AmountHandler;
