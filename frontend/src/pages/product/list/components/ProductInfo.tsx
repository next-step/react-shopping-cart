import { ProductType } from "../../../../domain/type";

type ProductInfoProps = ProductType;

const ProductInfo = ({ name, price }: ProductInfoProps) => {
  return (
    <div className="product-info">
      <span className="product-info__name">{name}</span>
      <span className="product-info__price">{`${price?.toLocaleString()}원`}</span>
    </div>
  );
};

export default ProductInfo;
