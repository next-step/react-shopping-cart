import { MouseEvent } from "react";
import IconButton from "../../primitive/IconButton/IconButton";
import { CardContainer, CardImg, CardInfo } from "./ProductCard.css";

interface ProductCard {
  imageUrl: string;
  title: string;
  price: number;
  onAddClick?: () => void;
}

export default function ProductCard({
  imageUrl,
  title,
  price,
  onAddClick,
}: ProductCard) {
  function add(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    onAddClick?.();
  }
  return (
    <div className={CardContainer}>
      <div>
        <img className={CardImg} src={imageUrl} />
      </div>
      <div className={CardInfo}>
        <div>
          <div>{title}</div>
          <div>{price.toLocaleString()} 원</div>
        </div>
        <div>
          <IconButton
            onClick={add}
            width={30}
            height={26}
            src="/icons/carts.svg"
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}
