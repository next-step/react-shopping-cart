import React, { useState } from "react";

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={count} />
      <div>
        <button className="number-input-button" onClick={handleDecrement}>
          ▲
        </button>
        <button className="number-input-button" onClick={handleIncrement}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
