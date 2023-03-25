export interface ProductPOJO {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export class ProductModel implements ProductPOJO {
  id: number;

  name: string;

  price: number;

  imageUrl: string;

  constructor({ id, imageUrl, name, price }: ProductPOJO) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.price = price;
  }
}
