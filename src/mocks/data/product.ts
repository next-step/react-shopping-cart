import { faker } from '@faker-js/faker';

export const products: Product[] = [
  ...Array.from({ length: 20 }, () => generateProduct()),
];

function generateProduct() {
  return {
    id: faker.datatype.uuid(),
    image: faker.image.food(300, 300, true),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(1000, 100000)),
  };
}
