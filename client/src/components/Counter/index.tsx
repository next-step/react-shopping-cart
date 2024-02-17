import { css } from '@emotion/css';

import { Button } from 'components';

import { colors } from 'constants/colors';
import { MinusSVG, PlusSVG } from 'assets/svgs';

export interface CounterProps {
  count?: number;
  min?: number;
  max?: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count = 1, min, max, onMinus, onPlus }: CounterProps) {
  const isMin = count === min;
  const isMax = count === max;

  const minButtonColor = isMin ? colors.gray400 : colors.black;
  const maxButtonColor = isMax ? colors.gray400 : colors.black;

  return (
    <div
      className={css`
        border: 1px solid ${colors.gray400};
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100px;
      `}
    >
      <Button size="small" type="text" disabled={isMin} onClick={onMinus}>
        <MinusSVG width={18} fill={minButtonColor} />
      </Button>
      <div>{count}</div>
      <Button size="small" type="text" disabled={isMax} onClick={onPlus}>
        <PlusSVG width={18} fill={maxButtonColor} />
      </Button>
    </div>
  );
}

export default Counter;
