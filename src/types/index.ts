export interface ProductInfoType extends ProductEventType {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductEventType {
  onClickProductImage?: () => void;
  onClickAddCart?: () => void;
}

export interface CartInfoType {
  id: number;
  product: ProductInfoType;
}
