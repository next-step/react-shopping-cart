import { db } from '@/mocks/factory';

describe('productPage를 테스트 합니다', () => {
  test('factory test', () => {
    const data = [db.products.create(), db.products.create(), db.products.create(), db.products.create()];

    expect(data.length).toBe(4);
  });
});
