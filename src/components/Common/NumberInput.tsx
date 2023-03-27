import { QuantityButtonType } from '@/pages/Cart/hooks/useCart';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

function CountControlButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex justify-center items-center px-2 py-[2px] border-[1px] border-gray-200 cursor-pointer focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
}

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  handleQuantity: (id: string, type: QuantityButtonType) => void;
}

function NumberInput({ id, value, min = 1, max = 20, handleQuantity, readOnly = true, ...props }: NumberInputProps) {
  return (
    <div className="flex justify-center items-center w-[80px] h-[58px]">
      <input
        readOnly={readOnly}
        className="flex-[7] h-full border-[1px] border-gray-200 text-center text-2xl outline-none"
        type="number"
        value={value || 1}
        min={min}
        max={max}
        {...props}
      />
      <div className="flex-[3]">
        <CountControlButton onClick={() => handleQuantity(id, 'up')}>▲</CountControlButton>
        <CountControlButton onClick={() => handleQuantity(id, 'down')}>▼</CountControlButton>
      </div>
    </div>
  );
}

export default NumberInput;
