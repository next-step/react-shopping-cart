import useCardState from './hooks/useCardState';
import { memo } from 'react';

function Icon() {
  const { icon, onClickIcon } = useCardState();

  return (
    <img
      className="card__icon"
      alt="icon"
      src={icon}
      onClick={onClickIcon}
    />
  );
}

export default memo(Icon);
