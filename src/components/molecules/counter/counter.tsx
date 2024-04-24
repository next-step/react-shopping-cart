import { SquareButton } from '@/components/atoms'
import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react'
import { HTMLAttributes } from 'react'

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  /** counter 최소 값 (기본 0) */
  min?: number
  /** counter 최대 값 (기본 20) */
  max?: number
  /** 증가시 실행할 부수함수 */
  onIncrement?: (value: number, max: number) => void
  /** 감소시 실행할 부수함수 */
  onDecrement?: (value: number, min: number) => void
}

export const Counter = ({
  value,
  min = 0,
  max = 20,
  className,
  onIncrement,
  onDecrement,
  ...rest
}: CounterProps) => {
  const handleIncrement = () => {
    onIncrement?.(value + 1, max)
  }

  const handleDecrement = () => {
    onDecrement?.(value - 1, min)
  }

  return (
    <div className={cx(container, className)} {...rest}>
      <div className={counterBoard}>{value}</div>
      <div className={buttonWrapper}>
        <SquareButton
          size="xs"
          fullWidth={false}
          color="whiteGray"
          disabled={value >= max}
          onClick={handleIncrement}
        >
          <IconCaretUpFilled size={8} />
        </SquareButton>
        <SquareButton
          size="xs"
          fullWidth={false}
          color="whiteGray"
          disabled={value <= min}
          onClick={handleDecrement}
        >
          <IconCaretDownFilled size={8} />
        </SquareButton>
      </div>
    </div>
  )
}

const container = flex({})

const counterBoard = flex({
  justifyContent: 'center',
  alignItems: 'center',
  width: '72px',
  height: '60px',
  border: '1px solid token(colors.gray.100)',
})

const buttonWrapper = flex({
  flexDir: 'column',
})
