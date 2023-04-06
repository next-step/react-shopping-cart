import useRouter from 'hooks/useRouter';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { getProductList } from 'store/feature/product/productslice';

const CURRENT_PAGE_KEY = 'page';

export const usePagination = () => {
  const { push, getLocationQuery } = useRouter();
  const location = useLocation();
  const currentPage = getLocationQuery(CURRENT_PAGE_KEY) === null ? 1 : Number(getLocationQuery(CURRENT_PAGE_KEY));
  const dispatch = useAppDispatch();

  const navigateToPage = (page: number) => {
    const url = `${location.pathname}?page=${page}`;
    push(url);
  };

  const handlePageNationButton = (page: number) => {
    navigateToPage(page);
    dispatch(getProductList(page));
  };

  return { currentPage, handlePageNationButton };
};
