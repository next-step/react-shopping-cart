import { renderHook, act } from '@testing-library/react';

import { useCounter } from 'hooks';

describe('useCounter', () => {
  test('count의 기본값은 0이어야 한다.', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  test('plus 함수를 호출하면 count가 1 증가해야만 한다.', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    act(() => {
      result.current.plus();
    });

    expect(result.current.count).toBe(1);
  });

  test('minus 함수를 호출하면 count가 1 감소해야만 한다.', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    act(() => {
      result.current.minus();
    });

    expect(result.current.count).toBe(-1);
  });
});
