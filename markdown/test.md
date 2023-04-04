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

## 읽을거리

- https://velog.io/@ckstn0777/vite-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-msw-vitest%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%B4%EB%B3%B4%EA%B8%B0

- https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/package.json
