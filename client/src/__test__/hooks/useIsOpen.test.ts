import { renderHook, act } from '@testing-library/react';

import { useIsOpen } from 'hooks';

describe('useIsOpen', () => {
  test('isOpen의 기본값은 false여야 한다.', () => {
    const { result } = renderHook(() => useIsOpen());

    expect(result.current.isOpen).toBe(false);
  });

  test('isOpen의 기본값을 변경할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useIsOpen(true));

    expect(result.current.isOpen).toBe(true);
  });

  test('open 함수를 호출하면 isOpen이 true가 되어야 한다.', () => {
    const { result } = renderHook(() => useIsOpen());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  test('close 함수를 호출하면 isOpen이 false가 되어야 한다.', () => {
    const { result } = renderHook(() => useIsOpen(true));

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  test('isOpen을 toggle 할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useIsOpen());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
