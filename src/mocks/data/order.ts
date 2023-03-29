import { faker } from '@faker-js/faker';

export const order: Order = {
  id: faker.datatype.uuid(),
  orderDetails: Array.from({ length: 20 }, () => generateOrderDetail()),
};

function generateOrderDetail(): OrderDetail {
  return {
    quantity: faker.datatype.number({ min: 10, max: 100 }),
    id: faker.datatype.uuid(),
    imageUrl: faker.image.food(300, 300, true),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(1000, 100000)),
  };
}
