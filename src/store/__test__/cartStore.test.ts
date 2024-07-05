import { act, renderHook } from '@testing-library/react';
import useCartStore from '../cartStore';
import { CartProduct } from '@/types/cart';
import { localStorageUtils } from '@/utils/localStorage';

const sampleCartProduct: CartProduct = {
  id: 1,
  product: {
    id: 1,
    name: '[그레인온] 골드카무트효소 30포',
    price: 35000,
    imageUrl:
      'https://product-image.kurly.com/product/image/be332720-3259-4fa3-9423-64a4d395df07.jpg',
  },
  quantity: 1,
};

const sampleCartProduct2: CartProduct = {
  id: 2,
  product: {
    id: 2,
    name: '[칸로] 캔디 5종 (택1)',
    price: 3960,
    imageUrl:
      'https://product-image.kurly.com/product/image/7aae11b3-348c-4935-bc2d-eab8b8f67d5f.jpg',
  },
  quantity: 1,
};

afterEach(() => {
  localStorageUtils.clear();
  const { result } = renderHook(() => useCartStore());
  result.current.clearCart();
});

describe('useCartStore 테스트', () => {
  test('장바구니에 상품 추가하기', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0]).toEqual(sampleCartProduct);
    expect(result.current.cart[0].quantity).toBe(1);
  });

  test('장바구니 전체 비우기', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });

  test('장바구니 선택한 상품(1개) 삭제하기', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
      result.current.addToCart(sampleCartProduct2);
    });

    expect(result.current.cart).toHaveLength(2);

    act(() => {
      result.current.removeProduct(sampleCartProduct.product.id);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0]).toEqual(sampleCartProduct2);
  });

  test('장바구니 선택한 상품들(2개 이상) 삭제하기 ', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
      result.current.addToCart(sampleCartProduct2);
    });

    expect(result.current.cart).toHaveLength(2);

    act(() => {
      result.current.removeProducts([
        sampleCartProduct.product.id,
        sampleCartProduct2.product.id,
      ]);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  test('상품 수량 업데이트(증가)', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
    });

    expect(result.current.cart[0].quantity).toBe(1);

    act(() => {
      result.current.increaseQuantity(sampleCartProduct.product.id);
    });

    expect(result.current.cart[0].quantity).toBe(2);
  });

  test('상품 수량 업데이트(감소)', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(sampleCartProduct);
      result.current.increaseQuantity(sampleCartProduct.product.id);
    });

    expect(result.current.cart[0].quantity).toBe(2);

    act(() => {
      result.current.decreaseQuantity(sampleCartProduct.product.id);
    });

    expect(result.current.cart[0].quantity).toBe(1);
  });
});
