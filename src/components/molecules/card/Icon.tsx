import useCardState from './hooks/useCardState';

export default function Icon() {
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

