import { useCallback } from 'react';

export interface ICard {
  imageSrc?: string;
  imageAlt?: string;
  description?: string;
  title: string;
  icon?: string;
  onClickIcon?: () => void;
}

export default function Card({ imageSrc, imageAlt = '', description, title, icon, onClickIcon }: ICard) {
  const handleClickIcon = useCallback(() => {
    onClickIcon?.();
  }, []);

  return (
    <div>
      {imageSrc && (
        <img
          alt={imageAlt}
          src={imageSrc}
        />
      )}
      <div className="flex justify-between w-280 p-5">
        <div className="card-info">
          <span className="card-info__description">{description}</span>
          <span className="card-info__title">{title}</span>
        </div>
        {icon && (
          <img
            alt="icon"
            src={icon}
            onClick={handleClickIcon}
          />
        )}
      </div>
    </div>
  );
}
