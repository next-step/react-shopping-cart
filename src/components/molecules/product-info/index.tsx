import { DivideLine } from '../../atomes';

interface IProductInfo {
  name: string | undefined;
  price: string | undefined;
}

export default function ProductInfo({ name = '', price = '' }: IProductInfo) {
  return (
    <div className="product-detail-info mb-10">
      <span className="product-detail-info__name">{name}</span>
      <DivideLine className="my-20"/>
      <div className="flex justify-between">
        <span>금액</span>
        <span className="product-detail-info__price">{price}</span>
      </div>
    </div>
  );
}
