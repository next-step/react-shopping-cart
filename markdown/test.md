테스트 전략

- msw + faker
- 팩토리를 통해 랜덤데이터를 만들면, 엣지케이스를 찾을 수 있지 않을까
- hook 로직 test

```ts
const a = factory.products.create();
const b = factory.productsWithQuantity.create();
const c = factory.carts.create();
const d = factory.order.create({ product: [b] });
const e = factory.orders.create({ orderDetails: [d] });
```
