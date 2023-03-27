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

type NumberInputProps = InputHTMLAttributes<HTMLInputElement>;
function NumberInput({ value, min = 1, max = 20, ...props }: NumberInputProps) {
  return (
    <div className="flex justify-center items-center w-[80px] h-[58px]">
      <input
        className="flex-[7] h-full border-[1px] border-gray-200 text-center text-2xl outline-none"
        type="number"
        value={value || 1}
        min={min}
        max={max}
        {...props}
      />
      <div className="flex-[3]">
        <CountControlButton>▲</CountControlButton>
        <CountControlButton>▼</CountControlButton>
      </div>
    </div>
  );
}

export default NumberInput;
