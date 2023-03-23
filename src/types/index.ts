export interface ProductType extends ProductEvent {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductEvent {
  onClickProductImage?: () => void;
  onClickAddCart?: () => void;
}

export interface CartItemType {
  id: number;
  product: ProductType;
}
