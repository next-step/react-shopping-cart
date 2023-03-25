import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

function CountControlButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex justify-center items-center px-3 py-[2px] border-[1px] border-gray-200 cursor-pointer focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
}

type NumberInputProps = InputHTMLAttributes<HTMLInputElement>;
function NumberInput({ value, min = 1, max = 20, ...props }: NumberInputProps) {
  return (
    <div className="flex justify-center items-center">
      <input
        className="w-[72px] h-[58px] border-[1px] border-gray-200 text-center text-2xl"
        type="number"
        value={value || 1}
        min={min}
        max={max}
        {...props}
      />
      <div>
        <CountControlButton>▲</CountControlButton>
        <CountControlButton>▼</CountControlButton>
      </div>
    </div>
  );
}

export default NumberInput;
