export type TProductsDto = {
  products: TProduct[];
};

export type TProduct = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
