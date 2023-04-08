import { db } from '@/mocks/factory';
import { createCartListWithQuantityAndChecked } from '.';
import { CartList, Cart } from '@/types';

describe('cart lib 함수를 테스트 합니다.', () => {
  test('createCartListWithQuantityAndChecked는 기본 quantity와 checked를 추가한 cartList를 반환해야 한다.', () => {
    const data: CartList = [db.carts.create() as Cart];

    const initialCartList = createCartListWithQuantityAndChecked(data);

    expect(initialCartList[0].product.quantity).equals(1);
    expect(initialCartList[0].product.checked).equals(true);
  });
});
