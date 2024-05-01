import { css } from '@styled-system/css';
import { Button } from '@/components';

type CardAddDisplayProps = {
  onClick?: () => void;
};

const plusIconStyle = css({
  fontSize: '36px',
  color: 'gray600',
});

export const CardAddDisplay = ({ onClick }: CardAddDisplayProps) => (
  <Button className={cardAddDisplayStyle} onClick={onClick}>
    <span className={plusIconStyle}>+</span>
  </Button>
);

CardAddDisplay.displayName = 'CardAddDisplay';

const cardAddDisplayStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '208px',
  height: '130px',
  padding: 0,
  backgroundColor: 'gray300',
  '&:hover': {
    backgroundColor: 'gray300',
  },
});
