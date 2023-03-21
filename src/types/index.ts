export interface ProductType {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
  onClickProductImage?: () => void;
  onClickAddCart?: () => void;
}

export interface CartItemType {
  id: number;
  product: ProductType;
}
