import {
  checkAllCart,
  decreaseCartCount,
  increaseCartCount,
  initializeCarts,
  toggleCart,
  uncheckAllCart,
  totalPriceOfCheckedCarts,
  totalCountOfCheckedCarts,
  isCheckedCart,
  isCheckedAll,
  idsOfCheckedCarts,
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
  test('장바구니 목록을 체크 가능한 장바구니 목록으로 초기화할 수 있어야 한다.', () => {
    const carts = INITIAL_STATE;
    const cart = carts[0];

    const initializedCarts = initializeCarts(carts);
    const initializedCart = initializedCarts[0];

    expect(initializedCart).toEqual({ ...cart, isChecked: false });
  });

  test('장바구니 목록 중 특정 항목의 수량을 늘릴 수 있어야 한다.', () => {
    const carts = initializeCarts(INITIAL_STATE);

    const increasedCarts = increaseCartCount(carts, id);
    const increasedCart = increasedCarts[0];

    expect(increasedCart.count).toBe(2);
  });

  test('장바구니 목록 중 특정 항목의 수량을 줄일 수 있어야 한다.', () => {
    const carts = initializeCarts(INITIAL_STATE);

    const decreasedCarts = decreaseCartCount(carts, id);
    const decreasedCart = decreasedCarts[0];

    expect(decreasedCart.count).toBe(0);
  });

  test('장바구니 목록 중 특정 항목을 체크 또는 체크 해제할 수 있어야 한다.', () => {
    let carts = initializeCarts(INITIAL_STATE);

    carts = toggleCart(carts, id);
    expect(carts[0].isChecked).toBe(true);

    carts = toggleCart(carts, id);
    expect(carts[0].isChecked).toBe(false);
  });

  test('장바구니 목록 전체 항목을 체크 또는 체크 해제할 수 있어야 한다.', () => {
    let carts = initializeCarts([...INITIAL_STATE, ...INITIAL_STATE]);

    carts = checkAllCart(carts);
    expect(carts[0].isChecked).toBe(true);
    expect(carts[1].isChecked).toBe(true);

    carts = uncheckAllCart(carts);
    expect(carts[0].isChecked).toBe(false);
    expect(carts[1].isChecked).toBe(false);
  });

  test('장비구니 목록에서 체크된 항목들의 금액 총합을 알 수 있어야 한다.', () => {
    let carts = initializeCarts(INITIAL_STATE);

    expect(totalPriceOfCheckedCarts(carts)).toBe(0);

    carts = toggleCart(carts, id);
    expect(totalPriceOfCheckedCarts(carts)).toBe(4700);
  });

  test('장비구니 목록에서 체크된 항목들의 총 개수를 알 수 있어야 한다.', () => {
    let carts = initializeCarts(INITIAL_STATE);

    expect(totalCountOfCheckedCarts(carts)).toBe(0);

    carts = toggleCart(carts, id);
    expect(totalCountOfCheckedCarts(carts)).toBe(1);
  });

  test('장바구니 목록 중 특정 항목을 체크 여부를 알 수 있어야 한다.', () => {
    let carts = initializeCarts(INITIAL_STATE);

    expect(carts[0].isChecked).toBe(false);
    carts = toggleCart(carts, id);

    expect(isCheckedCart(carts, id)).toBe(true);
  });

  test('장바구니 목록 전체 항목의 체크 여부를 알 수 있어야 한다.', () => {
    let carts = initializeCarts([...INITIAL_STATE, ...INITIAL_STATE]);

    carts = checkAllCart(carts);
    expect(isCheckedAll(carts)).toBe(true);

    carts = uncheckAllCart(carts);
    expect(isCheckedAll(carts)).toBe(false);
  });

  test('장바구니 목록에서 체크된 항목들의 id 목록를 알 수 있어야 한다.', () => {
    let carts = initializeCarts([...INITIAL_STATE, ...INITIAL_STATE]);

    carts = checkAllCart(carts);
    const ids = idsOfCheckedCarts(carts);
    expect(ids).toEqual([id, id]);
  });
});
