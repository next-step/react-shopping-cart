import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useAlertDialogStore from '@/store/alertDialogStore';

describe('alertDialogStore 테스트', () => {
  beforeEach(() => {
    // Zustand 스토어 초기화
    useAlertDialogStore.setState((state) => ({
      ...state,
      isOpen: false,
      title: '',
      message: '',
      btnText: '',
      onConfirm: vi.fn(),
      close: useAlertDialogStore.getState().close,
    }));
  });

  it('onOpen 함수가 호출되면 상태가 업데이트', () => {
    const { result } = renderHook(() => useAlertDialogStore());

    // 초기 상태 확인
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.title).toBe('');
    expect(result.current.message).toBe('');
    expect(result.current.btnText).toBe('');

    // onOpen 함수 호출 및 인자 전달
    const options = {
      title: 'Test Title',
      message: 'Test Message',
      btnText: 'Test Button',
      onConfirm: vi.fn(),
    };

    act(() => {
      result.current.onOpen(options);
    });

    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.title).toBe(options.title);
    expect(result.current.message).toBe(options.message);
    expect(result.current.btnText).toBe(options.btnText);
    expect(result.current.onConfirm).toBe(options.onConfirm);
  });

  it('close 함수가 호출되면 isOpen이 false로 업데이트', () => {
    const { result } = renderHook(() => useAlertDialogStore());

    expect(result.current.isOpen).toBeFalsy();

    // onOpen 함수 호출
    act(() => {
      result.current.onOpen({
        title: 'Test Title',
        message: 'Test Message',
        btnText: 'Test Button',
        onConfirm: vi.fn(),
      });
    });

    expect(result.current.isOpen).toBeTruthy();

    // close 함수 호출
    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
