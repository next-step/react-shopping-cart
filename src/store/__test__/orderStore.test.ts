import { act, renderHook } from '@testing-library/react';
import useOrderStore from '../orderStore';
import { Order } from '@/types/order';
import { localStorageUtils } from '@/utils/localStorage';

const sampleOrder: Order = {
  id: 1,
  orderDetails: [
    {
      id: 1,
      name: '[그레인온] 골드카무트효소 30포',
      price: 35000,
      imageUrl:
        'https://product-image.kurly.com/product/image/be332720-3259-4fa3-9423-64a4d395df07.jpg',
      quantity: 1,
    },
  ],
};

afterEach(() => {
  localStorageUtils.clear();
  const { result } = renderHook(() => useOrderStore());
  result.current.clearOrder();
});

describe('useOrderStore 테스트', () => {
  test('주문 추가하기', () => {
    const { result } = renderHook(() => useOrderStore());

    act(() => {
      result.current.addOrder(sampleOrder);
    });

    expect(result.current.order).toHaveLength(1);
    expect(result.current.order[0]).toEqual(sampleOrder);
  });

  test('주문 ID로 주문 가져오기', () => {
    const { result } = renderHook(() => useOrderStore());

    act(() => {
      result.current.addOrder(sampleOrder);
    });

    const order = result.current.getOrderById(sampleOrder.id);
    expect(order).toEqual(sampleOrder);
  });

  test('존재하지 않는 주문 ID로 주문 가져오기', () => {
    const { result } = renderHook(() => useOrderStore());

    act(() => {
      result.current.addOrder(sampleOrder);
    });

    const order = result.current.getOrderById(999);
    expect(order).toBeUndefined();
  });

  test('주문 전체 비우기', () => {
    const { result } = renderHook(() => useOrderStore());

    act(() => {
      result.current.addOrder(sampleOrder);
      result.current.clearOrder();
    });

    expect(result.current.order).toHaveLength(0);
  });
});
