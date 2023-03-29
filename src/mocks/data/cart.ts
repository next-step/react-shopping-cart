import { faker } from '@faker-js/faker';

export const userCarts: UserCart[] = [
  ...Array.from({ length: 20 }, () => generateCart()),
];

function generateCart() {
  return {
    id: faker.datatype.uuid(),
    checked: false,
    quantity: 1,
    product: {
      id: faker.datatype.uuid(),
      imageUrl: faker.image.food(300, 300, true),
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price(1000, 100000)),
    },
  };
}
