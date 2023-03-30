export interface ProductInfoType extends ProductEventType {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface ProductEventType {
  onClickProductImage?: () => void;
  onClickAddCart?: () => void;
}

export interface CartInfoType {
  id: number;
  select: boolean;
  product: ProductInfoType;
}
