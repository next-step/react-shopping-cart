export type ProductsDto = {
  products: TProduct[];
};

export type TProduct = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
