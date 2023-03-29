import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useRouter } from './index';

export const KEY_PAGE = 'page';
export const DEFAULT_PAGE = 1;

const usePagination = () => {
  const { routeTo, getLocationQuery } = useRouter();
  const location = useLocation();

  const currentPage = Number(getLocationQuery(KEY_PAGE) ?? DEFAULT_PAGE);

  const navigateToPage = useCallback((page: number) => {
    routeTo(`${location.pathname}?page=${page}`);
  }, []);

  return {
    currentPage,
    navigateToPage,
  };
};

export default usePagination;
