type QuantityProps = {
  updateQuantity: (value: number) => void;
  quantity: number;
};

export default function Quantity({ updateQuantity, quantity }: QuantityProps) {
  const handleClickIncrease = () => {
    updateQuantity(quantity + 1);
  };

  const handleClickDecrease = () => {
    updateQuantity(quantity - 1);
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={quantity} />
      <div>
        <button className="number-input-button" onClick={handleClickIncrease}>
          ▲
        </button>
        <button className="number-input-button" onClick={handleClickDecrease}>
          ▼
        </button>
      </div>
    </div>
  );
}
