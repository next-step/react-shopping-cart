export type ProductsDto = {
  products: ProductDto[];
};

export type ProductDto = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
