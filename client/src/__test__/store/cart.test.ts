import { useCartStore } from 'store/cart';

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

describe('Cart Store', () => {
  beforeEach(() => {
    const {
      actions: { initialize },
    } = useCartStore.getState();

    initialize(INITIAL_STATE);
  });

  test('장바구니 목록 중 특정 항목의 수량을 늘릴 수 있어야 한다.', () => {
    const {
      actions: { increase },
    } = useCartStore.getState();

    increase(id);

    expect(useCartStore.getState().carts[0].count).toBe(2);
  });

  test('장바구니 목록 중 특정 항목의 수량을 줄일 수 있어야 한다.', () => {
    const {
      actions: { decrease },
    } = useCartStore.getState();

    decrease(id);

    expect(useCartStore.getState().carts[0].count).toBe(0);
  });

  test('장바구니 목록 중 특정 항목을 체크 또는 체크 해제할 수 있어야 한다.', () => {
    const {
      actions: { toggle },
    } = useCartStore.getState();

    toggle(id);
    expect(useCartStore.getState().carts[0].isChecked).toBe(true);

    toggle(id);
    expect(useCartStore.getState().carts[0].isChecked).toBe(false);
  });

  test('장바구니 목록 전체 항목을 체크 또는 체크 해제할 수 있어야 한다.', () => {
    const {
      actions: { checkAll, uncheckAll, initialize },
    } = useCartStore.getState();
    initialize([...INITIAL_STATE, ...INITIAL_STATE]);

    checkAll();
    expect(useCartStore.getState().carts[0].isChecked).toBe(true);
    expect(useCartStore.getState().carts[1].isChecked).toBe(true);

    uncheckAll();
    expect(useCartStore.getState().carts[0].isChecked).toBe(false);
    expect(useCartStore.getState().carts[1].isChecked).toBe(false);
  });

  test('장바구니 목록에서 특정 id에 해당하는 상품 목록을 필터링할 수 있어야 한다.', () => {
    const {
      actions: { remove },
    } = useCartStore.getState();

    expect(useCartStore.getState().carts.length).toBe(1);
    remove([id]);
    expect(useCartStore.getState().carts.length).toBe(0);
  });
});
