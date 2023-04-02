import {
  decreaseCartCount,
  increaseCartCount,
  toggleCart,
  totalPriceOfCheckedCarts,
  isCheckedAll,
  removeCartByIds,
} from 'store/cart/model';

import { Carts } from 'types/cart';

const id = 1679917164549;
const INITIAL_STATE: Carts = [
  {
    count: 1,
    id,
    product: {
      id: 4,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg',
      name: '리치스 스위트콘 대 2.95kg',
      price: 4700,
    },
  },
];

describe('Cart Store Model', () => {
  test('장바구니 목록 중 특정 항목의 수량을 늘릴 수 있어야 한다.', () => {
    const increasedCarts = increaseCartCount(INITIAL_STATE, id);
    const increasedCart = increasedCarts[0];

    expect(increasedCart.count).toBe(2);
  });

  test('장바구니 목록 중 특정 항목의 수량을 줄일 수 있어야 한다.', () => {
    const decreasedCarts = decreaseCartCount(INITIAL_STATE, id);
    const decreasedCart = decreasedCarts[0];

    expect(decreasedCart.count).toBe(0);
  });

  test('장바구니 목록 중 특정 항목을 체크 또는 체크 해제할 수 있어야 한다.', () => {
    let checkedIds = new Set<number>();

    checkedIds = toggleCart(checkedIds, id);
    expect(checkedIds.has(id)).toBe(true);

    checkedIds = toggleCart(checkedIds, id);
    expect(checkedIds.has(id)).toBe(false);
  });

  test('장비구니 목록에서 체크된 항목들의 금액 총합을 알 수 있어야 한다.', () => {
    const carts = [...INITIAL_STATE];
    const checkedIds = new Set([id]);

    expect(totalPriceOfCheckedCarts(carts, checkedIds)).toBe(4700);
  });

  test('장바구니 목록 전체 항목의 체크 여부를 알 수 있어야 한다.', () => {
    let carts = [...INITIAL_STATE];
    let checkedIds = new Set<number>();

    expect(isCheckedAll(carts, checkedIds)).toBe(false);

    checkedIds = new Set<number>([id]);
    expect(isCheckedAll(carts, checkedIds)).toBe(true);
  });

  test('장바구니 목록에서 특정 id에 해당하는 상품 목록을 필터링할 수 있어야 한다.', () => {
    let carts = INITIAL_STATE;

    expect(carts.length).toBe(1);
    carts = removeCartByIds(carts, [id]);
    expect(carts.length).toBe(0);
  });
});
