import { API } from 'constants/api';
import { ProductsSchema } from 'types/product';

export default async function fetchProducts() {
  const response = await fetch(API.PRODUCTS);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return ProductsSchema.parse(data);
}
