import { ChangeEvent } from 'react';
import {
  numberInputContainer,
  numberInput,
  numberInputButton,
} from './NumberInput.css';

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const INPUT_MIN = 1;
const INPUT_MAX = 20;

const NumberInput = ({
  value,
  onChange,
  min = INPUT_MIN,
  max = INPUT_MAX,
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue < min || newValue > max) return;
    onChange(newValue);
  };

  const handlePlus = () => {
    const newValue = value + 1;
    if (newValue > max) return;
    onChange(newValue);
  };

  const handleMinus = () => {
    const newValue = value - 1;
    if (newValue < min) return;
    onChange(newValue);
  };

  return (
    <div className={numberInputContainer}>
      <input
        type='number'
        className={numberInput}
        value={value}
        onChange={handleChange}
      />
      <div>
        <button className={numberInputButton} onClick={handlePlus}>
          ▲
        </button>
        <button className={numberInputButton} onClick={handleMinus}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
