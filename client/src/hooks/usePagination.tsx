import useRouter from 'hooks/useRouter';
import { useLocation } from 'react-router-dom';

const CURRENT_PAGE_KEY = 'page';

export const usePagination = () => {
  const { push, getLocationQuery } = useRouter();
  const location = useLocation();

  const currentPage = getLocationQuery(CURRENT_PAGE_KEY) === null ? 1 : Number(getLocationQuery(CURRENT_PAGE_KEY));

  const navigateToPage = (page: number) => {
    const url = `${location.pathname}?page=${page}`;
    console.log(url);
    push(url);
  };
  return { currentPage, navigateToPage };
};
