import { useEffect, useLayoutEffect, useRef } from 'react';
import { sessionStorageUtils } from '@/utils/sessionStorage';
import { SESSION_STORAGE_KEYS } from '@/constants/storageKey';

export const getScrollPositionMap = () =>
  new Map<string, number>(
    JSON.parse(
      sessionStorageUtils.getItem(SESSION_STORAGE_KEYS.SCROLL_POSITION) || '[]'
    )
  );

export const useScrollPosition = (pageName: string) => {
  const lastCall = useRef(Date.now()); // Debounce

  // 스크롤 위치 설정
  useLayoutEffect(() => {
    const scrollPositionMap = getScrollPositionMap();

    window.scrollTo(0, scrollPositionMap.get(pageName) || 0);
  }, [pageName]);

  // 스크롤 위치 저장
  useEffect(() => {
    const scrollPositionMap = getScrollPositionMap();

    const handleScroll = () => {
      if (Date.now() - lastCall.current < 200) {
        return;
      }

      lastCall.current = Date.now();
      scrollPositionMap.set(pageName, window.scrollY);
      sessionStorageUtils.setItem(
        SESSION_STORAGE_KEYS.SCROLL_POSITION,
        JSON.stringify(Array.from(scrollPositionMap))
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageName]);
};
