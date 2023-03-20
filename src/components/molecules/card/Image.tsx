import useCardState from './hooks/useCardState';

export default function Image() {
  const { imageSrc, imageAlt, imageTitle } = useCardState();

  return (
    <div className="card-image">
      <img
        alt={imageAlt}
        src={imageSrc}
      />
      {imageTitle && (
        <span className="card-image__title">{imageTitle}</span>
      )}
    </div>
  );
}
