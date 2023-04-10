export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  isChecked: boolean;
};

export type Cart = {
  products: Product[];
  totalQuantity: number;
};
