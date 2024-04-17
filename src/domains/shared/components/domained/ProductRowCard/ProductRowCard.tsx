import { ChangeEvent } from "react";
import Count from "../../primitive/Count/Count";
import IconButton from "../../primitive/IconButton/IconButton";
import {
  cardContainer,
  cardDescription,
  cardFeatureContainer,
  cardImg,
  cardLeftSection,
  cardTitle,
} from "./ProductRowCard.css";

interface ProductRowCard {
  productImgUrl: string;
  title: string;
  price: number;
  quanity?: number;
  onChangeQuanity?: (quanity: number) => void;
  onRemove?: () => void;
  onCheck?: (value: boolean) => void;
  checked?: boolean;
}

export default function ProductRowCard({
  productImgUrl,
  title,
  price,
  quanity,
  onChangeQuanity,
  onRemove,
  onCheck,
  checked,
}: ProductRowCard) {
  function check(event: ChangeEvent<HTMLInputElement>) {
    onCheck?.(event.target.checked);
  }

  return (
    <div className={cardContainer}>
      <div className={cardLeftSection}>
        <div>
          <div>
            <input type="checkbox" onChange={check} {...{ checked }} />
          </div>
        </div>
        <div className={cardDescription}>
          <div>
            <img className={cardImg} src={productImgUrl} alt="product img" />
          </div>
          <div className={cardTitle}>{title}</div>
        </div>
      </div>
      <div className={cardFeatureContainer}>
        <div>
          <IconButton
            onClick={onRemove}
            width={30}
            height={26}
            src="/icons/carts.svg"
            alt="cart"
          />
        </div>
        <div>
          <Count value={quanity} onChange={onChangeQuanity} min={0} />
        </div>
        <div>{price.toLocaleString()} 원</div>
      </div>
    </div>
  );
}
