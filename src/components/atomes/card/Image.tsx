import useCardState from './hooks/useCardState';

export default function Image() {
  const { imageSrc, imageAlt } = useCardState();

  return (
    <img
      alt={imageAlt}
      src={imageSrc}
    />
  );
}
