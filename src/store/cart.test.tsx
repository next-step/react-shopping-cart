import { act, renderHook } from '@testing-library/react';
import { useCartStore } from './cart';
import { products } from '../mocks/handlers/data';

describe('useCartStore hook 테스트', () => {
  test('장바구니에 상품 추가', () => {
    const { result } = renderHook(() => useCartStore());
    const productData = Array.from(products.values());
    const product = productData[0];

    act(() => {
      result.current.setItems([{ id: product.id, product }]);
    });

    expect(result.current.items).toHaveLength(1);
  });

  test('장바구니 상품 수량을 변경', () => {
    const { result } = renderHook(() => useCartStore());
    const productData = Array.from(products.values());
    const product = productData[0];

    act(() => {
      result.current.setItems([{ id: product.id, product }]);
      result.current.handleQuantity(product.id, 3);
    });

    expect(result.current.items[0].quantity).toBe(3);
  });

  test('장바구니 상품 선택', () => {
    const { result: cartItems } = renderHook(() => useCartStore());

    const productData = Array.from(products.values());
    const product = productData[0];

    act(() => {
      cartItems.current.setItems([{ id: product.id, product }]);
      cartItems.current.toggleItemSelection(product.id);
    });

    expect(cartItems.current.selectedItems.has(product.id)).toBeTruthy();
  });

  test('장바구니 상품 선택 해제', () => {
    const { result: cartItems } = renderHook(() => useCartStore());

    const productData = Array.from(products.values());
    const product = productData[0];

    act(() => {
      cartItems.current.setItems([{ id: product.id, product }]);
      cartItems.current.toggleItemSelection(product.id);
      cartItems.current.toggleItemSelection(product.id);
    });

    expect(cartItems.current.selectedItems.has(product.id)).toBeFalsy();
  });

  test('장바구니 상품 전체 선택', () => {
    const { result: cartItems } = renderHook(() => useCartStore());
    const productData = Array.from(products.values());

    act(() => {
      cartItems.current.setItems([
        { id: productData[0].id, product: productData[0] },
        { id: productData[1].id, product: productData[1] },
      ]);
    });

    act(() => {
      cartItems.current.toggleAllItemsSelection();
    });

    expect(cartItems.current.isAllSelected).toBeTruthy();
  });

  test('장바구니 상품 전체 선택 해제', () => {
    const { result: cartItems } = renderHook(() => useCartStore());
    const productData = Array.from(products.values());

    act(() => {
      cartItems.current.setItems([
        { id: productData[0].id, product: productData[0] },
        { id: productData[1].id, product: productData[1] },
      ]);
    });

    act(() => {
      cartItems.current.toggleAllItemsSelection();
      cartItems.current.toggleAllItemsSelection();
    });

    expect(cartItems.current.isAllSelected).toBeFalsy();
  });

  test('장바구니 상품 전체 선택 후 일부 선택 해제', () => {
    const { result: cartItems } = renderHook(() => useCartStore());
    const productData = Array.from(products.values());

    act(() => {
      cartItems.current.setItems([
        { id: productData[0].id, product: productData[0] },
        { id: productData[1].id, product: productData[1] },
      ]);
    });

    act(() => {
      cartItems.current.toggleAllItemsSelection();
      cartItems.current.toggleItemSelection(productData[0].id);
    });

    expect(cartItems.current.isAllSelected).toBeFalsy();
  });
});
