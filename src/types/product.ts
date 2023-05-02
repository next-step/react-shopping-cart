export interface ProductDataType extends ProductEventType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductEventType {
  onClickProductImage?: () => void;
  onClickAddCart?: () => void;
}

export interface CartProductType extends ProductDataType {
  totalPrice: number;
  totalQuantity: number;
}

export interface CartItemType {
  id: number;
  select: boolean;
  product: CartProductType;
}
