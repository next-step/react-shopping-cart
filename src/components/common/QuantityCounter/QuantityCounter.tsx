import { flex } from '@/styled-system/patterns';
import { CartProduct } from '@/types/cart';
import Button from '../Button/Button';

type QuantityCounterProps = {
  min?: number;
  max?: number;
  quantity: CartProduct['quantity'];
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function QuantityCounter({
  min = 1,
  max = 99,
  quantity,
  onIncrement,
  onDecrement,
}: QuantityCounterProps) {
  return (
    <>
      {quantity && (
        <div
          className={flex({
            width: '100px',
            height: '30px',
          })}
        >
          <Button
            className={buttonStyle}
            variant='ghost'
            colorScheme='gray'
            onClick={onDecrement}
            disabled={quantity <= min}
          >
            ﹣
          </Button>
          <input
            type='number'
            className={inputStyle}
            value={quantity}
            readOnly
          />
          <Button
            className={buttonStyle}
            variant='ghost'
            colorScheme='gray'
            onClick={onIncrement}
            disabled={quantity >= max}
          >
            ﹢
          </Button>
        </div>
      )}
    </>
  );
}

const buttonStyle = flex({
  justifyContent: 'center',
  alignItems: 'center',
  color: 'gray.500',
  fontWeight: 'extrabold',
  border: '1px solid #d1d1d1',
  padding: '6px',
  width: '100%',
  borderRadius: 'unset',
});

const inputStyle = flex({
  width: '40px',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid #d1d1d1',
  borderLeft: 'none',
  borderRight: 'none',
  padding: 'unset',
  color: 'gray.500',
});
